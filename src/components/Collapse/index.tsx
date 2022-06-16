import React from 'react'
import * as S from './styles'

export type CollapseTypes = {
  header: React.ReactNode
  children: React.ReactNode
  id?: string | number
  onOpen: () => void
  open: boolean
}

const Collapse = ({ header, children, onOpen, open }: CollapseTypes) => {
  return (
    <S.Wrapper
      initial={{ height: '82.59px' }}
      animate={{
        height: open ? `400px` : '82.59px'
      }}
      transition={{ type: 'just' }}
    >
      <S.Header>
        <S.ArrowBtn
          animate={{
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)'
          }}
          transition={{ type: 'just' }}
          onClick={() => onOpen()}
        >
          <S.ArrowIcon />
        </S.ArrowBtn>
        {header}
      </S.Header>
      <S.Body height={Math.floor(400 - 82.59)}>{children}</S.Body>
    </S.Wrapper>
  )
}

export default Collapse
