import styled from 'styled-components'

export const Wrapper = styled.div<{
  marginTop?: number
  marginBottom?: number
}>`
  width: 100%;
  padding: 10px 5px;
  color: ${({ theme }) => theme.colors.primaryHover};
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderLine};
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-top: ${({ marginTop }) => marginTop}px;
`
