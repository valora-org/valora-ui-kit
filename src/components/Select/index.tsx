import React, { useState, useEffect, useCallback } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import * as S from './styles'
import { removeSpecialCharactersAndBlank, randomKey } from '../../utils/helpers'
import * as T from './types'
import { casting, removeSearch } from './casting'

const Select = ({
  id,
  label,
  example,
  placeholder = 'Selecione...',
  mode,
  timeoutDebounce = 1500,
  endpoint,
  error,
  hasOptionAllItems = false,
  options = [],
  captionMessage,
  noContentFoundMessage = 'Não há dados',
  isPaginate = true,
  disabled = false,
  isLoading = false,
  startDefaultOptions = false,
  value,
  isEditing = false,
  allowToClear = false,
  clearValue = false,
  isTime = false,
  disabledByBackend,
  showCounter = false,
  name,
  onChange = () => true,
  handleChangeValue = () => true,
  onClear = () => true,
  readOnly,
  getValueAndLabel = false,
  suffixEndpoint,
  developerMode_token,
  developerMode_ShowAnExampleEndpoint,
  onUnfocused = () => true,
  onSelected = () => true
}: T.SelectTypes) => {
  const { keyUpString, debounceIsWaiting } = useDebounce()
  const [values, setValues] = useState<T.OptionType[]>()
  const [defaultValues, setDefaultValues] = useState()
  const [asyncOptions, setAsyncOptions] = useState<T.OptionType[]>([])
  const [loading, setLoading] = useState(false)
  const [nextPageURL, setNextPageURL] = useState<string | null>('')
  const [counter, setCounter] = useState(0)
  const [identifier] = useState(() => {
    if (id) return id
    if (label) return removeSpecialCharactersAndBlank(label)
    return ''
  })
  const [isDisabled, setIsDisabled] = useState(false)
  const [asyncOptionOnFirstTime, setAsyncOptionOnFirstTime] = useState(true)
  const [itemsAreDisabled, setItemsAreDisabled] = useState(false)
  // const [arrayOptions, setArrayOptions] = useState<
  //   { label: string; value: number | string }[]
  // >([])
  const [timeError, setTimeError] = useState<string | undefined>(undefined)
  const [headers] = useState({
    headers: {
      Authorization: `Token ${developerMode_token ? developerMode_token : localStorage.getItem('token')}`
    }
  })

  /** contador de itens no select */
  const showCounterInSelect = (values: any) => {
    if (showCounter && (mode === 'multiple' || mode === 'tags')) {
      setCounter(values.length)
    }
  }

  /** função que realiza a pesquisa ao digitar no select  */
  const handleSearch = async (value: any, isDefault?: boolean) => {
    if (value === '') return
   
    setLoading(true)

    let suffix = ''

    if (suffixEndpoint) {
      /*insere o sufixo no endpoint*/
      const arrayOfSuffixEndpoint = suffixEndpoint.split('')

      if (arrayOfSuffixEndpoint[0] !== '&') {
        suffix = `&${suffixEndpoint}`
      } else {
        suffix = suffixEndpoint
      }
    }

    const fetchResult = await fetch(isDefault
      ? `${removeSearch(endpoint)}&ordering=-id&size=10${suffix}`
      : `${endpoint}${value}${suffix}`, headers)
    const response = await fetchResult.json();

    const { data } = response

    setNextPageURL(data.next)

    const result = casting(data, itemsAreDisabled)

    if (hasOptionAllItems) {
      /* insere no topo das opções */
      result.unshift({ label: 'Todos(as)', value: -1 })
    }

    setAsyncOptions(result)
    setLoading(false)
  }

  /** se o boleano "startDefaultOptions" estiver como True, ao carregar a
   * página será desparado a função abaixo para obter os dados iniciais do
   * select assíncrono.
   * */
  useEffect(() => {
    if (startDefaultOptions && !disabled && endpoint) {
      handleSearch('default', true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDefaultOptions, endpoint, disabled, isLoading])

  /** inserir dados iniciais no select do tipo assíncrono */
  useEffect(() => {
    if (value && isEditing) {
      setIsDisabled(true)

      let data
      let val
      if (Array.isArray(value)) {
        data = value
        val = !getValueAndLabel ? value.map((val) => val.value) : value
      } else {
        val = getValueAndLabel ? value : value.value
        data = [value]
      }
      if (asyncOptionOnFirstTime && asyncOptions.length === 0) {
        setAsyncOptions(data)
      }

      showCounterInSelect(val)
      setAsyncOptionOnFirstTime(false)
      setDefaultValues(val)
      setIsDisabled(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isEditing])

  /** função que realiza limpeza no select */
  useEffect(() => {
    if (allowToClear) {
      setValues(undefined)
      setDefaultValues(undefined)
      setCounter(0)
    }
  }, [clearValue, allowToClear])

  /** inserir dados iniciais no select do tipo síncrono  */
  useEffect(() => {
    if (value && !endpoint) {
      setIsDisabled(true)

      let val
      if (Array.isArray(value)) {
        val =
          value.length > 0
            ? value[0] !== undefined && value[0] !== null
              ? getValueAndLabel
                ? value.map((content) => content.value)
                : value
              : undefined
            : undefined
      } else {
        val = value.value
      }

      showCounterInSelect(val)
      setDefaultValues(val)
      setIsDisabled(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, endpoint])

  const handleClear = useCallback(() => {
    setDefaultValues(undefined)
    setValues(undefined)
    onClear()
  }, [onClear])

  /** função que realiza paginação quando usuário rolar scroll até o final  */
  const handlePaginate = async () => {
    if (nextPageURL) {
      setLoading(true)
      let suffix = ''

      if (suffixEndpoint) {
        const arrayOfSuffixEndpoint = suffixEndpoint.split('')

        if (arrayOfSuffixEndpoint[0] !== '&') {
          suffix = `&${suffixEndpoint}`
        } else {
          suffix = suffixEndpoint
        }
      }

      const fetchResult = await fetch(`${nextPageURL}${suffix}`, headers)
      const response = await fetchResult.json();
      const { data } = response

      setNextPageURL(data.next)

      const result: any = casting(data, itemsAreDisabled)

      setAsyncOptions([...asyncOptions, ...result])
      setLoading(false)
    }
  }

  /** função ativada quando o usuário realiza mudanças de estado no Select */
  const handleChange = useCallback(
    (value: any) => {
      if (mode === 'tags' && isTime) {
        /** lógica: verifica se  está no formato esperado */
        let hasError = false
        for (let i = 0; i < value.length; i++) {
          const time = value[i]

          if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
            hasError = true
            value.splice(i, 1)
          }
        }
        setTimeError(
          hasError
            ? 'Você precisa informar a hora e minuto no formato (HH:mm)'
            : undefined
        )
      }

      onChange(value)
      onSelected()
      setValues(value)
      handleChangeValue(value)
      showCounterInSelect(value)

      /** lógica: bloquear conteúdo caso seja o usuário selecione um determinado
       *  conteúdo, exemplo: item de "Todos", bloqueia o resto
       *  caso seja clicado ou removido "todos", desbloqueia o resto
       * */
      if (!getValueAndLabel && disabledByBackend && value && value.length > 0) {
        let hasAll = false
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            const val = value[i]

            const optionsToFilter = endpoint ? asyncOptions : options

            const [option] = optionsToFilter
              ? optionsToFilter.filter((option) => {
                  if (val === option.value) return option
                })
              : []

            if (disabledByBackend === option.label) {
              const value: any = option.value
              setValues([value])
              showCounterInSelect([value])
              hasAll = true
            }
          }
        } else {
          const optionsToFilter = endpoint ? asyncOptions : options

          const [option] = optionsToFilter
            ? optionsToFilter.filter((option) => {
                if (value === option.value) return option
              })
            : []

          if (disabledByBackend === option.label) {
            const value: any = option.value
            setValues([value])
            showCounterInSelect([value])
            hasAll = true
          }
        }
        disabledAllItems(hasAll)
      } else {
        disabledAllItems(false)
      }

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      asyncOptions,
      disabledByBackend,
      getValueAndLabel,
      onChange,
      showCounterInSelect
    ]
  )

  /** função que desabilita/habilita todos os itens  */
  const disabledAllItems = (disabled: boolean) => {
    setItemsAreDisabled(disabled)

    const options = asyncOptions.map((option) => ({
      ...option,
      disabled: option.label === disabledByBackend ? false : disabled
    }))

    setAsyncOptions(options)
  }

  /** função que detecta se o usuário fez uma rolagem nas opções e então
   * chama a paginação  */
  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
    if (bottom && isPaginate) {
      !loading && handlePaginate()
    }
  }

  /** função ativada quando usuário realiza a pesquisa e então tem um debounce */
  const onSearch = (text: string) => {
    keyUpString(
      text,
      (value: string | number) => {
        handleSearch(value)
      },
      timeoutDebounce
    )
  }

  /** função que obterá a quantidade de caracteres e informará qual posição horizontal deverá ficar o contador (Badge)  */
  const positionInHorizontal = (counter: number) => {
    const len = String(counter).length

    switch (len) {
      case 2:
        return -6

      case 3:
        return -9

      case 4:
        return -15

      case 5:
        return -18

      default:
        return -3
    }
  }

  if (disabled || isLoading || isDisabled) {
    return (
      <S.Wrapper>
        {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.InputWrapper
          error={!!error}
          disabled={disabled || isLoading || isDisabled}
        >
          <S.Select
            suffixIcon={<S.ArrowDownIcon />}
            bordered={false}
            disabled={disabled || isLoading || isDisabled}
            placeholder={placeholder}
          />
        </S.InputWrapper>
      </S.Wrapper>
    )
  }

  if (endpoint) {
    return (
      <S.Wrapper>
        <S.Title label={!!label}>
          {!!label && <S.Label htmlFor={identifier}>{label}</S.Label>}
          {!!example && <S.Example>{example}</S.Example>}
        </S.Title>
        <S.VLBadge
          // contador de itens selecionados
          count={counter}
          overflowCount={99999}
          offset={[positionInHorizontal(counter), 0]}
        >
          <S.InputWrapper error={!!error}>
            <S.Select
              suffixIcon={
                debounceIsWaiting || loading ? (
                  <S.LoadingIcon />
                ) : (
                  <S.ArrowDownIcon />
                )
              }
              bordered={false}
              showSearch
              allowClear
              labelInValue={getValueAndLabel}
              id={identifier}
              optionFilterProp="children"
              onClear={handleClear}
              disabled={isLoading || disabled || readOnly}
              placeholder={placeholder}
              onChange={handleChange}
              loading={loading || debounceIsWaiting}
              value={values || defaultValues}
              mode={mode}
              onPopupScroll={handleScroll}
              onSearch={onSearch}
              onBlur={() => {
                onUnfocused()
              }}
              notFoundContent={
                <S.NoContentFound>
                  {loading || debounceIsWaiting
                    ? 'Carregando...'
                    : noContentFoundMessage}
                </S.NoContentFound>
              }
            >
              {asyncOptions.map((option) => (
                <S.Option
                  key={`${option.value}_${randomKey()}`}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </S.Option>
              ))}
            </S.Select>
          </S.InputWrapper>
        </S.VLBadge>
        {!!error && <S.Error>{error}</S.Error>}
        {developerMode_ShowAnExampleEndpoint && (
          <S.Error>
            {`Developer Mode: https://{{ domain }}/api/bus/algorithms/?company_owner=
            {{ company_owner }}&search=`}
          </S.Error>
        )}
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper>
      <S.Title label={!!label}>
        {!!label && <S.Label htmlFor={identifier}>{label}</S.Label>}
        {!!example && <S.Example>{example}</S.Example>}
      </S.Title>
      <S.VLBadge
        // contador de itens selecionados
        count={counter}
        overflowCount={99999}
        offset={[positionInHorizontal(counter), 0]}
      >
        <S.InputWrapper error={!!error}>
          <S.Select
            suffixIcon={
              debounceIsWaiting || loading ? (
                <S.LoadingIcon />
              ) : (
                <S.ArrowDownIcon />
              )
            }
            bordered={false}
            showSearch
            allowClear
            onClear={handleClear}
            labelInValue={getValueAndLabel}
            id={identifier}
            disabled={isLoading || disabled || readOnly}
            optionFilterProp="children"
            placeholder={placeholder}
            onChange={handleChange}
            value={values || defaultValues}
            mode={mode}
            onPopupScroll={handleScroll}
            onBlur={() => onUnfocused()}
            notFoundContent={
              <S.NoContentFound>{noContentFoundMessage}</S.NoContentFound>
            }
          >
            {options &&
              options.map((option) => (
                <S.Option
                  key={`${option.value}_${randomKey()}`}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </S.Option>
              ))}
          </S.Select>
        </S.InputWrapper>
      </S.VLBadge>
      {!!captionMessage && (
        <S.CaptionMessage>{captionMessage}</S.CaptionMessage>
      )}
      {timeError !== undefined ? (
        <S.Error>{timeError}</S.Error>
      ) : error !== undefined && (
        <S.Error>{error}</S.Error>
      )}
      {developerMode_ShowAnExampleEndpoint && (
        <S.Error>
          {`Developer Mode: https://{{ domain }}/api/bus/algorithms/?company_owner=
            {{ company_owner }}&search=`}
        </S.Error>
      )}
    </S.Wrapper>
  )
}

export default Select
