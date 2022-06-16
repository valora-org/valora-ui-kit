import { css } from 'styled-components'

const antDesignGlobal = css`
  .logoBar {
    visibility: hidden !important;
  }
  .vl-ant-red-row {
    background: rgba(195, 0, 35, 0.1) !important;
  }
  .vl-ant-success-row {
    background: rgba(0, 172, 146, 0.1) !important;
  }
  .vl-ant-warning-row {
    background: rgba(228, 202, 99, 0.1) !important;
  }
  .ant-table-row-level-1 {
    background: rgba(189, 198, 210, 0.12) !important;
  }
  .ant-table-row-level-2 {
    background: rgba(189, 198, 210, 0.23) !important;
  }
  .vl-ant-error-row {
    background: rgba(195, 0, 35, 0.1) !important;
  }
  .vl-ant-information-row {
    background: rgba(104, 163, 199, 0.1) !important;
  }
  .ant-table-row-selected {
    background-color: rgba(238, 240, 242, 0.25) !important;
  }
  ${({ theme }) => css`
    &.ant-picker-cell-in-view.ant-picker-cell-today
      &.ant-picker-cell-inner::before {
      border: 1px solid ${theme.colors.primary} !important;
    }
    &.ant-picker-cell-in-view.ant-picker-cell-selected &.ant-picker-cell-inner,
    &.ant-picker-cell-in-view.ant-picker-cell-range-start
      &.ant-picker-cell-inner,
    &.ant-picker-cell-in-view.ant-picker-cell-range-end
      &.ant-picker-cell-inner {
      color: #fff;
      background: ${theme.colors.primary} !important;
    }
    &.ant-picker-today-btn {
      color: ${theme.colors.primary} !important;
    }
    &.ant-picker-ranges &.ant-picker-preset > &.ant-tag-blue {
      color: ${theme.colors.darkenPrimary} !important;
      background: ${theme.colors.clearPrimary} !important;
      border-color: ${theme.colors.primary} !important;
    }
    &.ant-picker-cell-in-view.ant-picker-cell-in-range::before {
      background: ${theme.colors.clearPrimary} !important;
    }
    &.ant-picker-now {
      a {
        color: ${theme.colors.primary} !important;
      }
    }
    &.ant-picker:hover,
    &.ant-picker-focused {
      /* border-color: ${theme.colors.primary} !important; */
      /* box-shadow: 0 0 0 2px rgba(124, 175, 176, 0.2); */
    }
    &.ant-picker:hover,
    &.ant-picker-focused {
      border-color: transparent;
    }
    &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
      &.ant-select-selector {
      /* border-color: ${theme.colors.primary} !important; */
      box-shadow: 0 0 0 2px rgba(124, 175, 176, 0.2);
    }
    &.ant-select:not(.ant-select-disabled):hover &.ant-select-selector {
      /* border-color: ${theme.colors.primary} !important; */
    }
    &.ant-picker-range &.ant-picker-active-bar {
      background: ${theme.colors.primary40} !important;
    }
    &.ant-select-item-option-selected:not(.ant-select-item-option-disabled)
      &.ant-select-item-option-state {
      color: ${theme.colors.primary} !important;
    }
    &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      color: rgba(0, 0, 0, 0.85);
      font-weight: normal;
      background-color: ${theme.colors.clearPrimary} !important;
    }
    &.ant-select-arrow {
      color: ${theme.colors.primary} !important;
    }
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start-single::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-end-near-hover::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-start-near-hover::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-end-single::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-in-range)::after {
      border-top: 1px dashed ${theme.colors.primary} !important;
      border-bottom: 1px dashed ${theme.colors.primary} !important;
    }
    &tr
      > &.ant-picker-cell-in-view.ant-picker-cell-range-hover:first-child::after,
    &tr
      > &.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child::after,
    &.ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start.ant-picker-cell-range-hover-edge-start-near-range::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range)::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-start::after {
      border-left: 1px dashed ${theme.colors.primary} !important;
    }
    &tr
      > &.ant-picker-cell-in-view.ant-picker-cell-range-hover:last-child::after,
    &tr
      > &.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child::after,
    &.ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-edge-end.ant-picker-cell-range-hover-edge-end-near-range::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range)::after,
    &.ant-picker-cell-in-view.ant-picker-cell-range-hover-end::after {
      border-right: 1px dashed ${theme.colors.primary} !important;
    }
    .ant-slider:hover {
      .ant-slider-track {
        background: ${theme.colors.primaryHover} !important;
      }
      .ant-slider-handle {
        border: solid 2px ${theme.colors.primaryHover} !important;
      }
    }
    .ant-badge-count {
      background: ${theme.colors.primary} !important;
    }
    .ant-slider-handle {
      border: solid 2px ${theme.colors.primary} !important;
    }
    .ant-slider-track {
      background-color: ${theme.colors.primary} !important;
    }
    .ant-slider-handle:focus {
      box-shadow: 0 0 0 5px rgba(124, 175, 176, 0.12);
    }
    .ant-tooltip-placement-bottom .ant-tooltip-arrow-content,
    .ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,
    .ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content {
      box-shadow: -3px -3px 7px transparent !important;
      /* transform: translateY(6.53553391px) rotate(45deg); */
    }
    .ant-tooltip-arrow-content {
      background-color: transparent !important;
    }
    .ant-tooltip-inner {
      background-color: transparent !important;
      box-shadow: none !important;
      color: ${theme.colors.primary} !important;
      margin-top: -15px !important;
    }
    .ant-select-selection-placeholder {
      color: ${theme.colors.textStrong} !important;
    }
    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
      background: ${theme.colors.primary} !important;
      border-color: ${theme.colors.primary} !important;
    }
    .ant-picker-time-panel-column
      > li.ant-picker-time-panel-cell-selected
      .ant-picker-time-panel-cell-inner {
      background: #f5f5f5;
    }
    .ant-btn-primary {
      background: ${theme.colors.primary} !important;
      border-color: ${theme.colors.primary} !important;
    }
    .ant-btn-primary[disabled],
    .ant-btn-primary[disabled]:hover,
    .ant-btn-primary[disabled]:focus,
    .ant-btn-primary[disabled]:active {
      background: #f5f5f5 !important;
      border-color: #d9d9d9 !important;
    }
    .switch[type='checkbox'].is-success:checked + label::before,
    .switch[type='checkbox'].is-success:checked + label:before {
      background: ${theme.colors.primary} !important;
    }
    .ant-tooltip,
    .ant-slider-tooltip,
    .ant-tooltip-placement-bottom {
      z-index: 0 !important;
    }
    .ant-select-selection-placeholder {
      font-size: 12px !important;
      font-weight: 300 !important;
    }
    .ant-modal {
      top: 50px;
    }
    .ant-modal-content {
      border-radius: 20px !important;
    }
    .ant-modal-header {
      border-radius: 20px 20px 0 0 !important;
    }
    .ant-modal-mask {
      background-color: rgba(0, 0, 0, 0.15) !important;
    }
    .ant-modal-header {
      font-family: 'Poppins', sans-serif !important;
      font-style: normal !important;
      font-weight: 600 !important;
      font-size: 16px !important;
      line-height: 16px !important;
      color: #87869a !important;
    }
    .ant-modal-title {
      font-family: 'Poppins', sans-serif !important;
      font-style: normal !important;
      font-weight: 600 !important;
      font-size: 16px !important;
      line-height: 16px !important;
      color: #455364 !important;
    }
    .ant-btn {
      color: ${({ theme }) => theme.colors.primary40};
      padding: 5px 20px;
      font-size: 12.5px;
      outline: none;
      border-radius: 4px;
      background: transparent;
      cursor: pointer;
      &:hover {
        background: rgba(124, 175, 176, 0.1);
        color: ${({ theme }) => theme.colors.primary40};
      }
      &:disabled {
        background: transparent;
        color: rgba(0, 0, 0, 0.2);
        cursor: not-allowed;
        &:hover {
          background: transparent;
        }
      }
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary40};
      }
    }
    .ant-btn-primary {
      color: #fff;
      background: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      text-shadow: none;
      transition: 0.6s;
      color: white;
      background: ${({ theme }) => theme.colors.primary};
      box-shadow: none;
      &:hover {
        background: rgba(115, 158, 164, 1);
        color: white;
      }
      &:disabled {
        background: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.2);
        cursor: not-allowed;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary40};
      }
      .ant-slider-dot-active {
        border-color: ${({ theme }) => theme.colors.primary} !important;
      }
      .ant-dropdown-menu-item:hover,
      .ant-dropdown-menu-submenu-title:hover {
        background-color: ${({ theme }) => theme.colors.primary} !important;
      }
      .footer-antd-spaced {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 16px;
        background: transparent;
        border-top: 1px solid #f0f0f0;
        border-radius: 0 0 2px 2px;
        background: red;
      }
    }
    .ant-upload-list {
      position: absolute !important;
      bottom: -120px !important;
      left: 0 !important;
      right: 0 !important;
    }
  `}
`

export default antDesignGlobal