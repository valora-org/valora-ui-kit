import React, { useEffect, useState } from 'react'
import moment from 'moment'
import * as S from './styles'
import { testDefaultDate, getActualDateTime } from '../../utils/helpers'

export type CalendarTypes = {
  type?: 'date' | 'dateranger'
  picker?: 'date' | 'time'
  showTime?:
    | boolean
    | {
        hideDisabledOptions: boolean
        defaultValue: [moment.Moment, moment.Moment]
      }
  label?: string
  error?: string
  example?: string
  defaultFormatDate?: boolean
  disabled?: boolean
  value?: string | string[]
  /** permissão para limpeza */
  allowToClear?: boolean
  /** limpar o valor  */
  clearValue?: boolean
  /** desabilitar dias passados */
  disablePastDays?: boolean
  /** formato de ISO */
  isoFormat?: boolean
  placeholder?: string | [string, string]
  onChange?: (value: any) => void
  onChangeDefaultDate?: (value: string | string[] | Date | null) => void
  /** função ativada quando o usuário tira o foco do componente */
  onUnfocused?: () => void
  /** função ativada quando o usuário seleciona uma data */
  onSelected?: () => void
  /** função ativada quando o "x" dentro do select é clicado */
  onClear?: () => void
}

const Calendar = ({
  label,
  example,
  error,
  type = 'date',
  picker = 'date',
  showTime = false,
  disabled = false,
  value,
  allowToClear,
  clearValue,
  disablePastDays = false,
  isoFormat = false,
  defaultFormatDate = false,
  placeholder = 'Escolha',
  onChangeDefaultDate = () => true,
  onChange = () => true,
  onUnfocused = () => true,
  onSelected = () => true,
  onClear = () => true
}: CalendarTypes) => {
  const [dateValue, setDateValue] = useState<string | string[] | Date | null>(
    null
  )

  useEffect(() => {
    if (allowToClear) {
      setDateValue(null)
    }
  }, [allowToClear, clearValue])

  useEffect(() => {
    if (value) {
      setDateValue(value)
    }
  }, [value])

  /** função que traduz o formato de data BR para o padrão usado no componente */
  const brDateToDefault = (
    date: string | string[] | null,
    hasSeconds = false
  ): string | string[] | null | Date => {
    if (!date) return null

    const rgxTime = /^(\d{2}):(\d{2})$/

    if (rgxTime.test(String(date))) {
      return date
    }

    if (Array.isArray(date)) {
      let date1: string | string[]
      let date2: string | string[]
      let time1 = ''
      let time2 = ''

      if (showTime) {
        date1 = date[0].split(' ')
        time1 = ` ${date1[1]}`
        date1 = date1[0].split('/')

        date2 = date[1].split(' ')
        time2 = ` ${date2[1]}`
        date2 = date2[0].split('/')
      } else {
        date1 = date[0].split('/')
        date2 = date[1].split('/')
      }

      return [
        `${date1[2]}-${date1[1]}-${date1[0]}${time1}`,
        `${date2[2]}-${date2[1]}-${date2[0]}${time2}`
      ]
    }

    let time = ''

    if (showTime) {
      const dateTime = date.split(' ')
      const seconds = hasSeconds ? ':00' : ''

      date = dateTime[0]
      time = ` ${dateTime[1]}${seconds}`
    }

    const array = date.split('/')
    return `${array[2]}-${array[1]}-${array[0]}${time}`
  }

  /** função que capta o valor quando o calendário é do formato de normal */
  const handleDateChange = (
    value: moment.Moment | null,
    dateString: string
  ) => {
    const dateValue = testDefaultDate(dateString) ? dateString : null
    const val = brDateToDefault(dateValue)

    setDateValue(val)
    onChangeDefaultDate(String(val))

    const changeValue =
      isoFormat && dateString && picker != 'time'
        ? new Date(String(brDateToDefault(dateString)) || '').toISOString()
        : dateString

    onChange(changeValue)
    onSelected()
  }

  /** função que capta o valor quando o calendário é do formato de Range */
  const handleRangeChange = (
    values: unknown,
    formatString: [string, string]
  ) => {
    const dateValue = testDefaultDate(formatString) ? formatString : null
    setDateValue(brDateToDefault(dateValue))
    onChangeDefaultDate(brDateToDefault(dateValue))

    console.log({
      formatString,
      date:
        formatString &&
        formatString[0] &&
        brDateToDefault(formatString[0], true)
    })

    /** primeira data */
    const changeDate1 =
      isoFormat && formatString && formatString[0]
        ? moment(String(brDateToDefault(formatString[0]))).toISOString(true)
        : defaultFormatDate
        ? brDateToDefault(formatString[0], true)
        : formatString[0]

    // segunda data
    const changeDate2 =
      isoFormat && formatString && formatString[1]
        ? moment(String(brDateToDefault(formatString[1]))).toISOString(true)
        : defaultFormatDate
        ? brDateToDefault(formatString[1], true)
        : formatString[1]

    onChange([changeDate1, changeDate2])
    onSelected()

    if (changeDate1 === '' && changeDate2 === '') {
      onClear()
    }
  }

  const defaultFormat = (picker: string): string => {
    if (showTime) return 'DD/MM/YYYY HH:mm'
    if (type === 'dateranger') return 'DD/MM/YYYY'

    switch (picker) {
      case 'time':
        return 'HH:mm'

      default:
        return 'DD/MM/YYYY'
    }
  }

  const disabledDate = (current: moment.Moment) => {
    if (!disablePastDays) return false
    return current && current < moment(getActualDateTime(), 'YYYY-MM-DD')
  }

  return (
    <S.Wrapper>
      <S.Title>
        {!!label && <S.Label>{label}</S.Label>}
        {!!example && <S.Example>{example}</S.Example>}
      </S.Title>
      <S.Content error={!!error} disabled={disabled}>
        {type === 'date' ? (
          <S.Calendar
            id="vl-calendar"
            format={defaultFormat(picker)}
            onChange={handleDateChange}
            picker={picker}
            disabled={disabled}
            placeholder={placeholder}
            showTime={showTime}
            onBlur={() => onUnfocused()}
            value={
              testDefaultDate(dateValue)
                ? moment(dateValue, picker !== 'time' ? 'YYYY-MM-DD' : 'HH:mm')
                : null
            }
            disabledDate={disabledDate}
            bordered={false}
          />
        ) : (
          <S.CalendarRange
            format={defaultFormat(picker)}
            disabled={disabled}
            showTime={showTime}
            onChange={handleRangeChange}
            disabledDate={disabledDate}
            bordered={false}
            onBlur={() => onUnfocused()}
            placeholder={placeholder}
            value={
              testDefaultDate(dateValue) && Array.isArray(dateValue)
                ? [moment(dateValue[0]), moment(dateValue[1])]
                : null
            }
            ranges={{
              Hoje: [moment(), moment()],
              'Este mês': [moment().startOf('month'), moment().endOf('month')]
            }}
          />
        )}
      </S.Content>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Calendar
