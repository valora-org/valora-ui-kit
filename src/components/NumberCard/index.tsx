import * as S from './styles'
import React from 'react'

export type NumberCardTypes = {
  number: string
  text: string
  isActive?: boolean
  className?: string
  numberClassName?: string
}

const NumberCard = ({
  number,
  text,
  isActive = false,
  className,
  numberClassName
}: NumberCardTypes) => {
  return (
    <S.Wrapper isActive={isActive}>
      <S.Content isActive={isActive} className={className}>
        <S.Number className={numberClassName}>{number}</S.Number>
        <S.Text>{text}</S.Text>
      </S.Content>
    </S.Wrapper>
  )
}

export default NumberCard
