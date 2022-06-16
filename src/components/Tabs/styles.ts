import styled, { css } from 'styled-components'

import { TabProps } from '.'

type ActiveProps = Pick<TabProps, 'isActive'>

export const Wrapper = styled.main`
  width: 100%;
  padding-top: 10px;

  &.no-padding-tab {
    padding-top: 0;
  }
`

export const TabContent = styled.div<{ hasLine: boolean }>`
  ${({ hasLine }) =>
    hasLine &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    `}
`

export const Content = styled.div`
  width: 100%;
`

export const Tabs = styled.ul`
  list-style-type: none;
  padding: 0px 7px;
  gap: 0 15px;
  margin-bottom: 7px;

  &.no-padding-tab {
    padding-top: 0;
  }

  &.no-padding-bottom {
    padding-bottom: 0;
    margin-bottom: 10px;
  }
`

const activeCSS = css`
  border-bottom: 2.5px solid ${({ theme }) => theme.colors.primary};
`

export const Tab = styled.li.attrs(({ isActive }: ActiveProps) => ({
  className: isActive && 'active'
}))<ActiveProps>`
  ${({ theme }) => css`
    display: inline;
    cursor: pointer;
    padding: calc(0.5em - 1px) 35px;
    padding-top: 10px;
    white-space: nowrap;
    color: ${theme.colors.textStrong};
    font-style: normal;
    font-weight: 500;
    font-size: 12.5px;
    z-index: 1;
    position: relative;
    margin-right: 20px;
    top: 5px;

    &.active {
      ${activeCSS}
      color: ${theme.colors.primary};
    }

    &:hover {
      ${activeCSS}
      color: ${theme.colors.primary};
    }
  `}
`
