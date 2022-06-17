import * as S from './styles'
import React from 'react'
export type SectionTitleTypes = {
  title: string
  marginTop?: number
  marginBottom?: number
}

const SectionTitle = ({
  title,
  marginTop = 0,
  marginBottom = 20
}: SectionTitleTypes) => {
  return (
    <S.Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      {title}
    </S.Wrapper>
  )
}

export {SectionTitle}
