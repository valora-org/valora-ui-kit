import React, { useState, InputHTMLAttributes, useEffect, useCallback } from 'react'
import * as S from './styles'

export type FieldProps = {
  label?: string
  example?: string
  labelFor?: string
  initialValue?: string | number
  /** coloque um componente nessa propriedade que irá apresentar um ícone */
  icon?: React.ReactNode
  /** posição do ícone */
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  readOnly?: boolean
  link?: string
  /** informe um texto para apresentar erro no campo */
  error?: string
  type?: string
  showLength?: boolean
  /** gere um UUID para limpar esse campo */
  clear?: string
  dataTestId?: string
  /** esse item precisa ser marcado como TRUE para quando estiver em modo de edição. Dica: atribua como verdadeiro nos primeiros segundos da página e depois mude para FALSO. (foi um jeito de contornar um problema do campo do AntDesign)  */
  isEditting?: boolean
  /** se o campo tem um formato */
  formated?: boolean
  /** formato customizado para o input - é necessário habilitar: formated */
  customFormat?: string
  typeOfFormat?: 'money' | 'percent'
  suffix?: string
  /** escala de decimal para o formato do número (float) */
  decimalScale?: number
  /** mensagem de explicações para o usuário */
  captionMessage?: string
  /** forçar o número como float */
  fixedDecimalScale?: boolean
  /** disponibilidade dos textos na label do input */
  titleDirection?: 'column' | 'row'
  name?: string
  onChange?: (value: any) => void
  /** função disparada quando há mudanças no estado - equivalente a onChange */
  onData?: (value: string) => void
  /** Quando o campo está no formato de Link Clicável, essa função é disparada quando usuário clicar */
  onClickLink?: () => void
  onInput?: (event: any) => void
} & InputHTMLAttributes<HTMLInputElement>

const Field = ({
  icon,
  iconPosition = 'right',
  label,
  example,
  labelFor = '',
  initialValue = '',
  link,
  error,
  disabled = false,
  readOnly = false,
  onData,
  type,
  showLength = false,
  clear = '',
  name,
  dataTestId,
  formated = false,
  customFormat,
  typeOfFormat,
  decimalScale = 2,
  fixedDecimalScale = false,
  onChange,
  onInput,
  titleDirection = 'row',
  captionMessage,
  isEditting = false,
  onClickLink,
  ...props
}: FieldProps) => {
  const [value, setValue] = useState<any>(initialValue)
  const [length, setLength] = useState(0)
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)
  const [typeChanged, setTypeChanged] = useState(type)

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue)
    }
  }, [initialValue, isEditting, onChange, onData, onInput])

  useEffect(() => {
    setTypeChanged(type)
  }, [type])

  useEffect(() => {
    if (clear !== '') {
      setValue('')
      setLength(0)
      onChange && onChange('')
    }
  }, [clear, onChange])

  /** função que formata o valor, removendo R$ e deixando no formato de float */
  const formattingValue = (value: string): number => {
    return Number(value.replace(/[%R$.]+/gi, '').replace(',', '.'))
  }

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: string | number | undefined = e.currentTarget.value
    newValue = typeOfFormat && newValue ? formattingValue(newValue) : newValue
    setValue(newValue)
    setLength(String(newValue).length)
    !!onData && onData(String(newValue))
    onChange && onChange(newValue)
    onInput && onInput(newValue)
  }

  const handleShowPassword = useCallback(() => {
    setPasswordIsVisible(!passwordIsVisible)
    setTypeChanged(!passwordIsVisible ? 'text' : type)
  }, [passwordIsVisible, type])

  return (
    <S.Wrapper disabled={disabled} error={!!error} type={type}>
      <S.Title titleDirection={titleDirection}>
        {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
        {!!example && (
          <S.Example titleDirection={titleDirection}>{example}</S.Example>
        )}
      </S.Title>
      <S.InputWrapper
        onClick={onClickLink}
        readOnly={readOnly}
        link={!!link}
        disabled={disabled}
      >
        {!!icon && !(type === 'password' && iconPosition === 'right') && (
          <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>
        )}

        {type === 'password' && (
          <S.Icon iconPosition={'right'}>
            {!passwordIsVisible ? (
              <S.Eye data-testid="vl-eye-icon" onClick={handleShowPassword} />
            ) : (
              <S.ClosedEye
                data-testid="vl-eye-icon-close"
                onClick={handleShowPassword}
              />
            )}
          </S.Icon>
        )}

        {formated ? (
          typeOfFormat === 'money' ? (
            <S.InputFormataded
              prefix="R$"
              value={value}
              onChange={onChangeValue}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={decimalScale}
              fixedDecimalScale={fixedDecimalScale}
              data-testid={dataTestId}
              allowNegative
              allowLeadingZeros
              readOnly={readOnly}
              link={!!link}
              {...props}
            />
          ) : typeOfFormat === 'percent' ? (
            <S.InputFormataded
              suffix="%"
              value={value}
              onChange={onChangeValue}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={decimalScale}
              fixedDecimalScale={fixedDecimalScale}
              data-testid={dataTestId}
              allowNegative
              allowLeadingZeros
              readOnly={readOnly}
              link={!!link}
              {...props}
            />
          ) : (
            <S.InputFormataded
              {...props}
              value={value}
              onChange={onChangeValue}
              format={customFormat}
              data-testid={dataTestId}
              allowNegative
              allowLeadingZeros
              link={!!link}
              readOnly={readOnly}
            />
          )
        ) : (
          <S.Input
            type={typeChanged}
            onChange={onChangeValue}
            onInput={onInput}
            value={value}
            iconPosition={iconPosition}
            disabled={disabled}
            data-testid={dataTestId}
            readOnly={readOnly}
            link={!!link}
            {...props}
          />
        )}

        {showLength && (
          <S.Length maxLength={props.maxLength || 0} length={length}>
            {length}
          </S.Length>
        )}
      </S.InputWrapper>

      {!!captionMessage && (
        <S.CaptionMessage>{captionMessage}</S.CaptionMessage>
      )}
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Field
