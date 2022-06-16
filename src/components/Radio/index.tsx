import {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useCallback,
  memo
} from 'react'

import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  checked?: boolean

  labelFor?: string
  value?: RadioValue
  disabled?: boolean
  dataTestId?: string
  title?: string
  hasPrevCheck?: boolean
  prevCheck?: (value?: RadioValue) => void
  error?: string
  clearChecked?: string
  noFirstRadio?: boolean
  captionMessage?: string
} & InputHTMLAttributes<HTMLInputElement>

const Radio2 = ({
  label,
  onCheck,
  checked = false,
  defaultChecked,
  labelFor = '',
  value,
  dataTestId,
  hasPrevCheck = false,
  prevCheck = () => true,
  title,
  error,
  noFirstRadio = false,
  disabled = false,
  captionMessage,
  ...props
}: RadioProps) => {
  const radioRef = useRef<HTMLInputElement>(null)

  const click = () => radioRef.current?.click()

  const onInput = useCallback(() => {
    !!onCheck && onCheck(value)
    click()
  }, [onCheck, value])

  const handlePrevCheck = useCallback(() => {
    hasPrevCheck ? prevCheck(value) : onInput()
  }, [hasPrevCheck, onInput, prevCheck, value])

  useEffect(() => {
    if (defaultChecked) {
      onInput()
    }
  }, [defaultChecked, onInput])

  return (
    <S.Content bottomMessage={!!captionMessage} error={!!error}>
      {title && !noFirstRadio && <S.Title>{title}</S.Title>}
      <S.Wrapper
        hasTitle={!!title}
        onClick={() => !disabled && handlePrevCheck()}
        checked={checked}
        error={!!error}
        disabled={disabled}
      >
        <S.Overlay />
        <S.Input
          id={labelFor}
          type="radio"
          ref={radioRef}
          value={value}
          onInput={() => !disabled && handlePrevCheck()}
          data-testid={dataTestId}
          disabled={disabled}
          {...props}
        />
        {!!label && (
          <S.Label disabled={disabled} htmlFor={labelFor}>
            {label}
          </S.Label>
        )}
      </S.Wrapper>
      {captionMessage && !noFirstRadio && (
        <S.CaptionMessage>{captionMessage}</S.CaptionMessage>
      )}
      {error && !noFirstRadio && <S.Error>{error}</S.Error>}
    </S.Content>
  )
}

export default memo(Radio2)
