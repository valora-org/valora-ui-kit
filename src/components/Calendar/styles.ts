import styled, { css } from 'styled-components'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import { DatePicker, Select as AntdSelect } from 'antd'

export const { Option } = AntdSelect

export const Select = styled(AntdSelect)``

export const { RangePicker } = DatePicker

export const Content = styled.div<{ error: boolean; disabled: boolean }>`
  ${({ theme, error, disabled }) => css`
    display: flex;
    border-radius: 5px;
    font-family: ${theme.font.family}
    border-color: #dbdbdb;
    font-family: ${theme.font.family};
    font-size: 15px;
    margin-bottom: 0px;
    padding: 3px 0px;

    ${
      disabled &&
      css`
        background: rgba(0, 0, 0, 0.05);
      `
    }

    border: ${error ? theme.border.fieldsError : theme.border.fieldsBase};
    &:hover {
      border: ${theme.border.fieldsHover};
    }

    &:focus-within {
      border: ${theme.border.fieldsFocus};
    }
    `}
`

export const Wrapper = styled(ConfigProvider).attrs({
  locale: ptBR
})``

export const Calendar: any = styled(DatePicker)`
  width: 100%;
`

export const CalendarRange: any = styled(RangePicker)`
  width: 100%;
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
export const Example = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textStrong};
  `}
  font-size: 12px;
  font-weight: 300;
`
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
