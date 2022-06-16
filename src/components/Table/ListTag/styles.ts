import styled, { css } from 'styled-components'
import { ListTagTypes } from '.'

type ListTagStylesTypes = Omit<ListTagTypes, 'label'>

const colorize = (name: string) => {
  switch (name) {
    case 'success':
      return css`
        color: ${({ theme }) => theme.colors.activeText};
        background-color: ${({ theme }) => theme.colors.activeBg};
      `
    case 'dark':
      return css`
        color: ${({ theme }) => theme.colors.textIntense};
        background-color: ${({ theme }) => theme.colors.bgMedium};
      `
    default:
      return css`
        color: ${({ theme }) => theme.colors.textMedium};
        background-color: ${({ theme }) => theme.colors.bgMedium};
      `
  }
}

export const Wrapper = styled.div<ListTagStylesTypes>`
  padding: 5px 10px;
  border-radius: 6px;
  width: fit-content;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 11px;

  ${({ color }: any) => colorize(color)}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-item: center;
    `}
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  width: fit-content;
`
