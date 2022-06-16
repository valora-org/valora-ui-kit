import ListTag, { Styles } from './ListTag'

type ColumnTypes = {
  title: string
  name: string
  dataIndex: string
  selector: string
  sorter: boolean
  sortable: boolean
  fixed: any
  key: string
  defaultSortOrder?: string
  render?: (text: string, record: any) => React.ReactNode
}

/** função criada para quebrar linhas quando há um nome muito extenso */
const breakLinesFromTooltipText = (names: string[]) => {
  let phrase = ''

  if (!names || names.length === 0) return phrase

  names.forEach((name) => {
    phrase += `${name}\n`
  })

  return phrase
}

/** Mapeador de colunas da tabela principal. Há algumas funcionalidades que o
 * AntDesign obriga a realizar, então essa função faz o parse para que a tabela
 * funcione 100%.
 * Lógica: abaixo, dentro do FOR, para cada item, direcionamos o dado conforme
 * a tabela do AntDesign precisa para mostrar os dados
 * */
export const columnMapper = (
  data: ColumnTypes[],
  defaultSort?: string,
  defaultSortDirection?: string,
  isSuperUser?: boolean
): any => {
  if (!data) return data

  for (let i = 0; i < data.length; i++) {
    const column = data[i]

    if (!isSuperUser && column.selector === 'company_owner') {
      delete data[i]
    } else {
      column.title = column.name
      column.dataIndex = column.selector
      column.sorter = column.sortable

      // chave de tags: chave criada pelo próprio frontend para incluir a tag
      // colorida. Exemplo: Usada no Mapa de Viagens "Ativo":"Inativo"
      if (column.selector === 'table_tag') {
        // eslint-disable-next-line react/display-name
        column.render = (text) => (
          <ListTag
            color={text ? 'success' : 'default'}
            label={text ? 'Ativo' : 'Inativo'}
          />
        )
      }

      if (column.selector === 'algorithm_tag') {
        // eslint-disable-next-line react/display-name
        column.render = (text, record) => (
          <Styles.Content>
            {record.algorithm_length >= 1 && (
              <>
                {record.algorithm_length === 1 ? (
                  <>{record.algorithm_names[0]}</>
                ) : (
                  <ListTag
                    color={'dark'}
                    label={record.algorithm_length}
                    rounded
                    tooltipLabel={
                      record.algorithm_names.length > 0
                        ? breakLinesFromTooltipText(record.algorithm_names)
                        : undefined
                    }
                    tooltipBreakLine
                  />
                )}
              </>
            )}
            {record.algorithm_length > 1 && record.algorithm}
          </Styles.Content>
        )
      }

      if (defaultSort === column.selector) {
        column.defaultSortOrder =
          defaultSortDirection === '' ? 'ascend' : 'descend'
      }
    }
  }

  return data
}

/** mapeador apenas para direcionar o 'id' para 'key', pois sem essa 'key'
 * a tabela pode ter problemas. É usada como a "key" de um looping no React.
 */
export const resultMapper = (data: any) => {
  if (!data) return data

  for (let i = 0; i < data.length; i++) {
    const result = data[i]
    result.key = result.id
  }

  return data
}
