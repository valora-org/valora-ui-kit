import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`
export const Title = styled.h2`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;

  ${({ theme }) => css`
    color: ${theme.colors.primaryHover};
  `}

  margin-bottom: 10px;
`

export const Description = styled.p<{
  color?: 'info' | 'error' | 'success' | 'warning' | 'default'
}>`
  ${({ theme, color }) => css`
    color: ${color === 'warning'
      ? theme.colors.warning
      : color === 'error'
      ? theme.colors.error
      : color === 'info'
      ? theme.colors.info
      : color === 'success'
      ? theme.colors.success
      : theme.colors.textStrong};
  `}

  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  margin-bottom: 13px;
`
