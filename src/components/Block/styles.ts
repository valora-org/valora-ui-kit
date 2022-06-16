import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
`
export const Label = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding-left: 6px;
    position: relative;
    top: 12px;
    left: 14px;
    text-align: center;
    padding: 8px;
    font-weight: 500;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    padding: 18px;
    border: 1px solid ${theme.colors.baseColorGray};
    border-radius: 7px;
  `}
`
