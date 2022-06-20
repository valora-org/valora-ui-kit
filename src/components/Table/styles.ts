import styled, { css } from 'styled-components'
import { Table as AntdTable } from 'antd'
import { Loading as VLLoading } from '../Loading'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import { Edit } from '@styled-icons/feather/Edit'
import { Trash } from '@styled-icons/feather/Trash'
import { Activity } from '@styled-icons/feather/Activity'
import { Copy } from '@styled-icons/feather/Copy'
import { Eye } from '@styled-icons/feather/Eye'
import { Visibility } from '@styled-icons/material/Visibility'
import { Search } from '@styled-icons/feather/Search'
import { ChevronDown } from '@styled-icons/entypo/ChevronDown'

export const Content = styled(ConfigProvider).attrs({
  locale: ptBR
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

type ArrowDownType = {
  expanded?: boolean
  isTransparent?: boolean
}

export const ArrowDown = styled(ChevronDown)<ArrowDownType>`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: ${({ isTransparent }) => (isTransparent ? 'auto' : 'pointer')};
  color: ${({ isTransparent }) => (isTransparent ? 'transparent' : '#444a4f')};

  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(-90deg);
    `}
`

export const LoadingInsideWrapper = styled.div`
  width: calc(100% - 170px);
  height: calc(100% - 250px);
  position: fixed;
  display: flex;

  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.75);
  z-index: 9999;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`

export const Wrapper = styled.div`
  height: calc(100vh - 235px);
  overflow: auto;
  width: 100%;
  position: relative;
  padding: 0 10px;

  &.no-border-page {
    height: calc(100vh - 245px);
  }

  &.no-tabs {
    height: calc(100vh - 195px);
  }

  &.lb {
    height: calc(100vh - 230px);
  }

  &.lb-1 {
    height: calc(100vh - 245px);
  }

  ${({ theme }) => css`
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }

    &:hover {
      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.borderDisabledFields};
      }
    }

    ::-webkit-scrollbar {
      width: 5px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.neutral};
    }

    .ant-pagination-item {
      font-family: 'Poppins', sans-serif;
    }

    .ant-pagination-item a {
      color: ${theme.colors.textStrong} !important;
      font-size: 12px;
    }

    .ant-select {
      color: ${theme.colors.textStrong} !important;
      font-size: 12px;
    }

    .ant-pagination {
      color: ${theme.colors.textStrong} !important;
      font-size: 12px;
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${theme.colors.primary} !important;
      border-color: ${theme.colors.primary} !important;
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${theme.colors.primary} !important;
    }

    .ant-checkbox-checked::after {
      border: 1px solid ${theme.colors.primary} !important;
    }

    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${theme.colors.primary} !important;
    }

    .ant-pagination-item-active a {
      color: ${theme.colors.primary} !important;
    }

    .ant-pagination-item-active {
      border-color: ${theme.colors.primary} !important;
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      border: 1px solid transparent;
    }

    .ant-select-focused:not(.ant-select-disabled)
      .ant-select:not(.ant-select-customize-input)
      .ant-select-seletor {
      box-shadow: none !important;
    }

    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
      .ant-select-selector {
      border-color: transparent !important;
      box-shadow: 0 0 0 2px transparent !important;
    }

    .ant-pagination-options-quick-jumper input {
      border: ${theme.border.fieldsBase} !important;
      border-radius: 4px !important;
    }

    .ant-pagination-options-quick-jumper input:focus,
    .ant-pagination-options-quick-jumper .input-focused {
      border-color: #7cafb0 !important;
      box-shadow: 0 0 0 2px transparent;
    }

    .ant-pagination-options-quick-jumper input:hover {
      border: ${theme.border.fieldsHover};
    }

    .ant-pagination-item-link {
      svg {
        fill: ${theme.colors.textStrong} !important;
      }
    }

    .ant-select-arrow {
      svg {
        fill: ${theme.colors.textStrong} !important;
      }
    }

    .ant-table-column-sorter-up.active,
    .ant-table-column-sorter-down.active {
      color: ${theme.colors.primary} !important;
    }

    .ant-table-thead > tr > th {
      font-family: 'Poppins', sans-serif;
      color: ${theme.colors.textIntense} !important;
      font-weight: 600 !important;
      background: white !important;
      font-size: 12px;
    }

    .ant-table-tbody > tr > td {
      font-family: 'Poppins', sans-serif;
      color: ${theme.colors.textHardStrong} !important;
      font-weight: normal !important;
      font-size: 12px;
      border-bottom: 1px solid transparent;
    }

    .ant-table-selection-column {
      padding-top: 14px;
    }

    .vl-ant-red-row > td.ant-table-column-sort {
      background: rgba(195, 0, 35, 0.1) !important;
    }

    .ant-table-tbody > tr.ant-table-row:hover > td {
      background: #eef0f2 !important;
    }

    .ant-table-tbody > tr.vl-ant-red-row:hover > td {
      background: rgba(195, 0, 35, 0.03) !important;
    }

    .ant-table-tbody > tr.ant-table-row-selected > td {
      background: rgba(238, 240, 242, 0.25) !important;
      border-color: rgba(0, 0, 0, 0.03);
    }

    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      visibility: hidden;
    }
  `}
`

export const Table: typeof AntdTable = styled(AntdTable)`
  position: relative;
`

export const Loading = styled(VLLoading)``

export const BtnWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  gap: 0 6px;
`

export const IconButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background: transparent;

  transition: background-color 0.7s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.clearPrimary25};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.clearPrimary25};
    box-shadow: 0px 0px 7px 0px ${({ theme }) => theme.colors.clearPrimary75};

    path {
      stroke: ${({ theme }) => theme.colors.textBold};
    }
  }
`

const iconCSS = css`
  width: 15px;
  height: 15px;
  color: ${({ theme }) => theme.colors.textHardStrong};

  &:hover {
    color: ${({ theme }) => theme.colors.textBold};
  }
`

export const DashIcon = styled(Activity)`
  ${iconCSS}
`
export const EditIcon = styled(Edit)`
  ${iconCSS}
`
export const TrashIcon = styled(Trash)`
  ${iconCSS}
`
export const IconDuplicate = styled(Copy)`
  ${iconCSS}
`
export const IconEye = styled(Eye)`
  ${iconCSS}
`

export const IconEyeFilled = styled(Visibility)`
  ${iconCSS}
`

export const IconSearch = styled(Search)`
  ${iconCSS}
`

export const Action = styled.div`
  right: 10px;
  margin-left: 0px;
  position: relative;
`

export const LoadingWrapper = styled.div`
  height: calc(100vh - 270px);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 10px;

  &.no-tabs {
    height: calc(100vh - 240px);
  }

  ${({ theme }) => css`
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }

    &:hover {
      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.primary};
      }
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

export const Selections = styled.div<{ isVisible?: boolean }>`
  width: 100%;
  color: ${({ theme }) => theme.colors.textMedium};
  font-size: 12px;
  padding-left: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 7px;

  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`
export const Pipe = styled.div`
  height: 15px;
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
`

export const ActionToSelection = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`
export const Span = styled.span``
