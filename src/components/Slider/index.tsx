import React, { useState, InputHTMLAttributes, useEffect } from 'react'

import * as S from './styles'

export type SliderProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  disabled?: boolean
  error?: string
  dataTestId?: string
  onChange?: (data: any) => any
  defaultValue?: number
  max?: number
  min?: number
  step?: number
  beforeText?: string
  afterText?: string
  name?: string
  tooltipVisible?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Slider2 = ({
  label,
  labelFor = 'rangeInput',
  error,
  disabled = false,
  onInput,
  onChange,
  defaultValue,
  max = 9,
  min = 1,
  name,
  step = 1,
  beforeText = 'Mínimo',
  afterText = 'Máximo',
  tooltipVisible = true
}: SliderProps) => {
  const [value, setValue] = useState<number | undefined>(() => {
    if (defaultValue !== undefined) {
      return defaultValue
    }

    return 1
  })

  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  const onChangeSlider = (e: any) => {
    setValue(e)
    onChange && onChange(e)

    !!onInput && onInput(e)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label>{label}</S.Label>}
      <S.InputWrapper content={value}>
        <S.LeftText>{beforeText}</S.LeftText>
        <S.InputContent>
          <S.Slider
            min={min}
            max={max}
            step={step}
            id={labelFor}
            onChange={onChangeSlider}
            disabled={disabled}
            defaultValue={value}
            value={value}
            tooltipVisible={tooltipVisible}
            tooltipPlacement="bottom"
            getTooltipPopupContainer={() =>
              document.querySelector('.ant-slider-step')
            }
          />
        </S.InputContent>
        <S.RightText>{afterText}</S.RightText>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Slider2
