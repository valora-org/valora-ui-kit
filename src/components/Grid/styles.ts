import styled, { css } from 'styled-components'

type WrapperType = {
  limit: number
}

export const Wrapper = styled.div<WrapperType>`
  ${({ limit, theme }) => css`
    width: 100%;
    max-height: ${limit * 35 + 36}px;
    overflow: auto;

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.secondary};
    }
  `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border: 0.5px solid ${theme.colors.borderTable};
  `}
`

export const Column = styled.th`
  ${({ theme }) => css`
    border: 0.5px solid ${theme.colors.borderTable};
    padding: 0.5rem;
    background: ${theme.colors.borderNavBarBg};
  `}
`

export const Line = styled.tr``

export const Item = styled.td`
  ${({ theme }) => css`
    border: 0.5px solid ${theme.colors.borderTable};
    padding: 0.5rem;
  `}
`
