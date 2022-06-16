import { OptionType, Options } from './types'

/** função para mapeação dos dados que vem do backend para inserir de forma
 * correta no Select
 */
export const casting = (data: any, itemsAreDisabled: boolean): OptionType[] => {
  return data?.results.map(
    ({
      id,
      label,
      value,
      name,
      display_name,
      description,
      number,
      initials,
      external_id,
      iata_code,
      slug
    }: Options) => ({
      value: slug || id || value,
      label:
        label ||
        name ||
        display_name ||
        number ||
        description ||
        external_id ||
        initials ||
        iata_code,
      disabled: itemsAreDisabled
    })
  )
}

/** remover a query "search", utilizado para requisição inicial */
export const removeSearch = (text?: string): string | undefined => {
  if (text) return text.replace('&search=', '')

  return text
}
