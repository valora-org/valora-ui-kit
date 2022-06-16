import styled, { css } from 'styled-components'
import { Select as AntdSelect, Badge } from 'antd'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { LoadingOutlined } from '@ant-design/icons'
export const { Option } = AntdSelect

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Select = styled(AntdSelect)`
  width: 100%;
  font-size: 14px;
`

export const VLBadge: typeof Badge = styled(Badge)`
  width: 100%;
  font-size: 16px;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colors.textStrong};
    cursor: pointer;
  `}
`
export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const NoContentFound = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputWrapper = styled.div<{ error: boolean; disabled?: boolean }>`
  ${({ theme, error, disabled }) => css`
    border-radius: 5px;
    font-family: ${theme.font.family}
    border-color: #dbdbdb;
    font-family: ${theme.font.family};
    font-size: 15px;
    margin-bottom: 0px;
    padding: 3px 0px;

    border: ${error ? theme.border.fieldsError : theme.border.fieldsBase};
    ${
      disabled &&
      css`
        background: rgba(0, 0, 0, 0.05);
      `
    }
    &:hover {
      ${
        !disabled &&
        css`
          border: ${theme.border.fieldsHover};
        `
      }
    }

    &:focus-within {
      border: ${theme.border.fieldsFocus};
    }
  `}
`

export const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  width: 20px;
  height: 20px;
  margin-top: -5px;
  margin-left: -4px;

  ${({ theme }) => css`
    color: ${theme.colors.textStrong};
  `}
`

export const LoadingIcon = styled(LoadingOutlined)`
  ${({ theme }) => css`
    color: ${theme.colors.textStrong};
  `}
`

export const Example = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textStrong};
  `}
  font-size: 12px;
  font-weight: 300;
`

export const CaptionMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textStrong};
  `}
  font-size: 12px;
  font-weight: 300;
`

export const Title = styled.div<{ label: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ label }) => (label ? 'space-between' : 'flex-end')};
`
