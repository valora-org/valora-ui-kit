import { SwitchSize } from 'antd/lib/switch'
import React, { useEffect, useState } from 'react'
import * as S from './styles'

export type SwitchTypes = {
  labelBefore?: string
  labelAfter?: string
  onChange?: (checked: boolean) => void
  onClick?: (checked: boolean) => void
  defaultValue?: boolean
  size?: SwitchSize
  colorText?: string
  changeOnStart?: boolean
}

const Switch = ({
  labelBefore,
  labelAfter,
  onChange = () => true,
  onClick = () => true,
  defaultValue = false,
  size = 'default',
  colorText = 'rgba(0, 0, 0, 0.85)',
  changeOnStart = true,
  ...props
}: SwitchTypes) => {
  const [isChecked, setIsChecked] = useState(defaultValue)

  useEffect(() => {
    if (changeOnStart) {
      setIsChecked(defaultValue)
      onChange(defaultValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue])

  const handleChange = (checked: boolean) => {
    setIsChecked(checked)
    onChange(checked)
  }

  return (
    <S.Wrapper onClick={() => onClick(!isChecked)}>
      {labelBefore && <S.Label color={colorText}>{labelBefore}</S.Label>}
      <S.Switch
        {...props}
        onChange={handleChange}
        checked={isChecked}
        defaultChecked={defaultValue}
        size={size}
      />
      {labelAfter && <S.Label color={colorText}>{labelAfter}</S.Label>}
    </S.Wrapper>
  )
}

export default Switch
