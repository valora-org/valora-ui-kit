type MonthParserType = {
  month: number
  abbreviated?: boolean
}

/** função que retorna os meses abreviados ou não conforme os dados que vem do new Date() */
export const mounthParser = ({
  month,
  abbreviated = false
}: MonthParserType) => {
  const fullMonths = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]
  const abbrMonths = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez'
  ]

  if (abbreviated) {
    return abbrMonths[month - 1]
  }

  return fullMonths[month - 1]
}

/** função que formata os dados da data no gráfico da Dashboard */
export const tooltipParserChart = (date: string) => {
  const dates = date.split(' ')
  const dayMonth = dates[0].split('/')
  const hour = dates[1]

  const day = dayMonth[0]
  const month = mounthParser({ month: Number(dayMonth[1]), abbreviated: true })
  return `${day} ${month} ${hour}`
}

export const getActualDateTime = (): string => {
  const date = new Date()
  let day: number | string = date.getDate()
  let month: number | string = date.getMonth() + 1
  const year = date.getFullYear()
  let hour: number | string = date.getHours()
  let minutes: number | string = date.getMinutes()

  day = day < 10 ? `0${day}` : day

  month = month < 10 ? `0${month}` : month

  hour = hour < 10 ? `0${hour}` : hour

  minutes = minutes < 10 ? `0${minutes}` : minutes

  return `${year}-${month}-${day} ${hour}:${minutes}`
}

export const testDefaultDate = (
  date: string | string[] | null | Date
): boolean => {
  if (!date) return false

  if (Array.isArray(date)) {
    date = date[0]
  }

  date = String(date)

  const rgxWeek = /^\d{1,2}ª - \d{4}$/
  const rgxYear = /^(\d{4})$/
  const rgxMonth = /^(\d{1,2})\/(\d{4})$/
  const rgxTime = /^(\d{2}):(\d{2})$/
  const rgxBr = /^(\d{1,2})\/(\d{1,2})\/(\d{4}) (\d{2}):(\d{2})$/
  const rgxBrTime = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
  const rgx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
  const rgxDateTime = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])) (\d{2}):(\d{2})/
  return (
    rgxWeek.test(date) ||
    rgxYear.test(date) ||
    rgxMonth.test(date) ||
    rgxTime.test(date) ||
    rgxBr.test(date) ||
    rgxBrTime.test(date) ||
    rgx.test(date) ||
    rgxDateTime.test(date)
  )
}

export const removeSpecialCharacters = (text: string): string => {
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return text.replace(/[&/\\#,+()$~%.'":*?!<>{}]/g, '')
}

export const removeSpecialCharactersAndBlank = (text: string): string => {
  text = text.trim()
  text = removeSpecialCharacters(text)
  return text.replace(/ /g, '_')
}

export const randomKey = (length?: number) => {
  length = length ? length : 5
  const result = []
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
  }
  return result.join('')
}
