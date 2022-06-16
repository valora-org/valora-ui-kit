import styled, { css } from 'styled-components'
import { TooltipTypes } from '.'
import { InfoCircle } from '@styled-icons/boxicons-regular'

type TooltipType = {
  open: boolean
} & Omit<TooltipTypes, 'label' | 'open'>

export const Wrapper = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  height: fit-content;
  z-index: 2147483647; /* max of chrome */
`
export const Tooltip = styled.div<TooltipType>`
  z-index: 2147483647; /* max of chrome */

  ${({ invert, toTop }) =>
    invert &&
    css`
      transform: ${`scale(-1, ${toTop ? '-1' : '1'})`};
    `}

  ${({ invert, toTop }) =>
    !invert &&
    toTop &&
    css`
      transform: scale(1, -1);
    `}

  ${({ autoOpen }) =>
    !autoOpen &&
    css`
      &:hover::after {
        display: block;
      }

      &:hover::before {
        display: block;
      }
    `}

  &::before {
    display: ${({ open }) => (open ? 'block' : 'none')};
    border-color: transparent transparent
      ${({ theme }) => theme.colors.primary40} transparent;
    content: '';
    top: ${({ directions }) =>
      directions?.arrowTop ? directions?.arrowTop : 75}%;
    left: ${({ directions }) =>
      directions?.arrowLeft ? directions?.arrowLeft : 30}%;
    position: absolute;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: solid;
  }

  &::after {
    ${({ invert, toTop }) =>
      invert &&
      css`
        transform: ${`scale(-1, ${toTop ? '-1' : '1'})`};
      `}

    ${({ invert, toTop }) =>
      !invert &&
      toTop &&
      css`
        transform: scale(1, -1);
      `}

    opacity: 1;
    display: ${({ open }) => (open ? 'block' : 'none')};
    content: attr(aria-label);
    white-space: ${({ breakLine }) => (breakLine ? 'pre' : 'nowrap')};
    width: fit-content;
    top: ${({ directions }) =>
      directions?.tooltipTop ? directions?.tooltipTop : 110}%;
    left: ${({ directions }) =>
      directions?.tooltipLeft ? directions?.tooltipLeft : 0}%;
    background: ${({ theme }) => theme.colors.primary40};
    padding: 3px 6px;
    border-radius: 4px;
    font-weight: 400;
    color: white;
    position: absolute;
    font-size: 10px;
  }
`

export const Child = styled.div<{ invert: boolean; toTop: boolean }>`
  width: 100%;
  height: 100%;

  ${({ invert, toTop }) =>
    invert &&
    css`
      transform: ${`scale(-1, ${toTop ? '-1' : '1'})`};
    `}

  ${({ invert, toTop }) =>
    !invert &&
    toTop &&
    css`
      transform: scale(-1, -1);
    `}
`

export const IconInfo = styled(InfoCircle)`
  width: 22px;
  color: ${({ theme }) => theme.colors.tooltip};
`
