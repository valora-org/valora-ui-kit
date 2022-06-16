import styled, { css } from 'styled-components'
import { ChevronDown } from '@styled-icons/entypo/ChevronDown'

export const Container = styled.div``

export const Wrapper = styled.table`
  width: 100%;
`

export const Row = styled.tr`
  &.ant-table-row:hover {
    background: #fafafa;
  }
`

export const Header = styled.thead``

export const HeadColumns = styled.th`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: rgb(109, 118, 126) !important;
  font-weight: 600 !important;
  background: white !important;
`

export const Body = styled.tbody``

export const BodyColumns = styled.td`
  padding: 16px;
  padding-bottom: 25px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  border-bottom: 1px solid transparent;
  color: rgb(68, 74, 79) !important;
  font-weight: normal !important;

  &.ant-table-row-expand-icon-cell {
    text-align: center;
    padding: 0px;
    width: 0px;
  }

  &.ant-table-selection-column,
  &.ant-table-selection-column {
    padding-left: 0;
    padding-right: 0;
  }
`
export const ArrowArea = styled.div`
  display: flex;
  background-color: red;
  width: 100%;
  height: 51px;
  justify-content: center;
  align-items: center;
`

type ArrowDownType = {
  expanded?: boolean
  isTransparent?: boolean
}

export const ArrowDown = styled(ChevronDown)<ArrowDownType>`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  flex-shrink: 0;
  cursor: ${({ isTransparent }) => (isTransparent ? 'auto' : 'pointer')};
  color: ${({ isTransparent }) => (isTransparent ? 'transparent' : '#444a4f')};

  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(-90deg);
    `}
`
