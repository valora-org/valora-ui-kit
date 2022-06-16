import React, { useState, useCallback, useEffect } from 'react'
import * as S from './styles'
import { Checkbox, Empty } from 'antd'

export type FieldType = {
  name: string
  selector: string
  key: string | number
  render?: (text: string, record?: any) => React.ReactNode
}

export type DataTypes = {
  fields: FieldType[]
  results: any[]
}

export type TableCustomTypes = {
  fields?: FieldType[]
  results?: any[]
  isLoading: boolean
  clearSelection?: string
  onExpand?: (record: any) => void
  onRowSelection?: (ids: any[], records: any[]) => void
}

const TableCustom = ({
  fields,
  results,
  isLoading = true,
  onExpand,
  onRowSelection,
  clearSelection = ''
}: TableCustomTypes) => {
  const [idsExpanded, setIdsExpanded] = useState<any[]>([])
  const [update, setUpdate] = useState(false)
  const [rowsSelected, setRowsSelected] = useState<any[]>([])

  const isExpanded = useCallback(
    (id: string | number): boolean => {
      return idsExpanded.findIndex((expanded) => expanded === id) > -1
    },
    [idsExpanded]
  )

  const isSelected = useCallback(
    (record: any): boolean => {
      return (
        rowsSelected.findIndex((selected) => selected.id === record.id) > -1
      )
    },
    [rowsSelected]
  )

  useEffect(() => {
    /**
     * Limpador dos checkboxes marcados.
     * para realizar essa ação, na página em questão atribua um estado e gere
     * um UUID.
     */
    if (clearSelection !== '') {
      setRowsSelected([])
    }
  }, [clearSelection])

  const handleExpand = useCallback(
    (record: any) => {
      setIdsExpanded((_last) => {
        const index = _last.findIndex((last) => last === record.id)

        setRowsSelected([])
        onRowSelection && onRowSelection([], [])

        if (index > -1) {
          _last.splice(index, 1)
          return _last
        }

        onExpand && onExpand(record)
        return [..._last, record.id]
      })

      setUpdate(!update)
    },
    [onExpand, onRowSelection, update]
  )

  const handleSelection = useCallback(
    (record: any) => {
      setRowsSelected((_last) => {
        const index = _last.findIndex((last) => last.id === record.id)

        const childrens = []

        // adicionando todos os filhos e "netos" do item
        if (record.children && record.children.length > 0) {
          for (let i = 0; i < record.children.length; i++) {
            const child1 = record.children[i]
            childrens.push(child1)

            if (child1.children && child1.children.length > 0) {
              for (let k = 0; k < child1.children.length; k++) {
                const child2 = child1.children[k]
                childrens.push(child2)
              }
            }
          }
        }

        // se o item da tabela já existir, então é uma remoção
        if (index > -1) {
          const itemsWillBeKept = []
          _last.splice(index, 1)

          for (let j = 0; j < _last.length; j++) {
            const recordSelected = _last[j]

            if (
              index !== j &&
              childrens.findIndex(
                (children) => children.id === recordSelected.id
              ) === -1
            ) {
              itemsWillBeKept.push(recordSelected)
            }
          }

          const ids = itemsWillBeKept.map((records) => records.id)
          onRowSelection && onRowSelection(ids, itemsWillBeKept)
          return itemsWillBeKept
        }

        const selections = [..._last, record, ...childrens]

        // removendo duplicados
        const newSelections = selections.filter(
          (selection, i) => selections.indexOf(selection) === i
        )

        const ids = newSelections.map((records) => records.id)
        onRowSelection && onRowSelection(ids, newSelections)
        return newSelections
      })
      setUpdate(!update)
    },
    [update, onRowSelection]
  )

  const childrenIsAvailableToShow = useCallback(
    (result: any): boolean => {
      return (
        result.children && result.children.length > 0 && isExpanded(result.id)
      )
    },
    [isExpanded]
  )

  if (isLoading) return <div />

  return (
    <>
      <S.Wrapper>
        <S.Header className="ant-table-thead">
          <S.Row>
            <S.HeadColumns className="ant-table-cell ant-table-selection-column" />
            {fields &&
              fields?.map((field) => (
                <S.HeadColumns key={field.selector} className="ant-table-thead">
                  {field.name}
                </S.HeadColumns>
              ))}
          </S.Row>
        </S.Header>
        <S.Body className="ant-table-cell">
          {results &&
            results?.map((result: any, index: number) => (
              <>
                <S.Row
                  key={index}
                  className="ant-table-row ant-table-row-level-0"
                >
                  <S.BodyColumns className="ant-table-cell ant-table-selection-column">
                    <Checkbox
                      onChange={() => handleSelection(result)}
                      checked={isSelected(result)}
                    />
                  </S.BodyColumns>
                  {fields?.map((field, index: number) => (
                    <S.BodyColumns
                      key={field.selector}
                      className={`ant-table-cell ${
                        index === 0 && 'ant-table-cell-with-append'
                      }`}
                    >
                      {index === 0 ? (
                        <>
                          <S.ArrowDown
                            onClick={() => handleExpand(result)}
                            expanded={!isExpanded(result.id)}
                          />
                          {field.render
                            ? field.render(result[field.selector], result)
                            : result[field.selector]}
                        </>
                      ) : (
                        <>
                          {field.render
                            ? field.render(result[field.selector], result)
                            : result[field.selector]}
                        </>
                      )}
                    </S.BodyColumns>
                  ))}
                </S.Row>
                {childrenIsAvailableToShow(result) &&
                  result.children.map((child1: any) => (
                    <>
                      <S.Row
                        key={child1.id}
                        className="ant-table-row ant-table-row-level-1"
                      >
                        <S.BodyColumns className="ant-table-cell ant-table-selection-column">
                          <Checkbox
                            onChange={() => handleSelection(child1)}
                            checked={isSelected(child1)}
                          />
                        </S.BodyColumns>
                        {fields?.map((field, index2: number) => (
                          <S.BodyColumns
                            key={field.selector}
                            className={`ant-table-cell ${
                              index2 === 0 && 'ant-table-cell-with-append'
                            }`}
                          >
                            {index2 === 0 ? (
                              <>
                                <span
                                  className="ant-table-row-indent indent-level-1"
                                  style={{ paddingLeft: 15 }}
                                />
                                <S.ArrowDown
                                  onClick={() => handleExpand(child1)}
                                  expanded={!isExpanded(child1.id)}
                                />
                                {field.render
                                  ? field.render(child1[field.selector], child1)
                                  : child1[field.selector]}
                              </>
                            ) : (
                              <>
                                {field.render
                                  ? field.render(child1[field.selector], child1)
                                  : child1[field.selector]}
                              </>
                            )}
                          </S.BodyColumns>
                        ))}
                      </S.Row>
                      {childrenIsAvailableToShow(child1) &&
                        child1.children.map((child2: any) => (
                          <S.Row
                            key={child2.id}
                            className="ant-table-row ant-table-row-level-2"
                          >
                            <S.BodyColumns className="ant-table-cell ant-table-selection-column">
                              <Checkbox
                                onChange={() => handleSelection(child2)}
                                checked={isSelected(child2)}
                              />
                            </S.BodyColumns>
                            {fields?.map((field, index3: number) => (
                              <S.BodyColumns
                                key={field.selector}
                                className={`ant-table-cell ${
                                  index3 === 0 && 'ant-table-cell-with-append'
                                }`}
                              >
                                {index3 === 0 ? (
                                  <>
                                    <span
                                      className="ant-table-row-indent indent-level-2"
                                      style={{ paddingLeft: 30 }}
                                    />
                                    <S.ArrowDown
                                      onClick={() => handleExpand(child2)}
                                      expanded={!isExpanded(child2.id)}
                                      isTransparent
                                    />
                                    {field.render
                                      ? field.render(
                                          child2[field.selector],
                                          child2
                                        )
                                      : child2[field.selector]}
                                  </>
                                ) : (
                                  <>
                                    {' '}
                                    {field.render
                                      ? field.render(
                                          child2[field.selector],
                                          child2
                                        )
                                      : child2[field.selector]}
                                  </>
                                )}
                              </S.BodyColumns>
                            ))}
                          </S.Row>
                        ))}
                    </>
                  ))}
              </>
            ))}
        </S.Body>
      </S.Wrapper>
      {results?.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    </>
  )
}

export default TableCustom
