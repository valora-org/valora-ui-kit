import styled, { css } from 'styled-components'

import { HeadingProps, LineColors } from '.'

export const wrapperModifiers = {
  small: () => css`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray};
    &::after {
      width: 3rem;
    }
  `,

  medium: () => css`
    font-size: ${({ theme }) => theme.font.sizes.xlarge};

    @media (max-width: 768px) {

      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  `,

  huge: () => css`
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  `,

  lineLeft: (lineColor: LineColors) => css`
    padding-left: ${({ theme }) => theme.spacings.xxsmall};
    border-left: 0.4rem solid ${({ theme }) => theme.colors[lineColor]};
  `,

  lineBottom: (lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${({ theme }) => theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(lineColor!)}
    ${!!size && wrapperModifiers[size]()}
  `}
`
