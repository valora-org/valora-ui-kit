import React from 'react'
import * as S from './styles'

export type BlockProps = {
  children: React.ReactNode
  label?: string
}

const Block = ({ label = '', children }: BlockProps) => (
  <S.Wrapper>
    <S.Label>{label}</S.Label>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Block
