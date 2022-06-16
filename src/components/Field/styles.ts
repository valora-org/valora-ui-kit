import styled, { css, DefaultTheme } from 'styled-components'
import { FieldProps } from '.'
import NumberFormat from 'react-number-format'
import { EyeSlashFill, EyeFill } from '@styled-icons/bootstrap'

type IconPositionProps = Pick<FieldProps, 'iconPosition'> & { link: boolean }

type WrapperProps = Pick<FieldProps, 'disabled' | 'type'> & {
  error?: boolean
}

type LengthProps = {
  maxLength: number
  length: number
}

export const InputWrapper = styled.div<{
  disabled: boolean
  readOnly: boolean
  link: boolean
}>`
  ${({ theme, disabled, readOnly }) => css`
    display: flex;
    padding: 0 10px;
    font-family: ${theme.font.family};
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border-color: #dbdbdb;
    font-size: 15px;
    margin-bottom: 4px;

    ${readOnly
      ? css`
          border-bottom: 1px solid ${theme.colors.borderDisabledFields};
          border-radius: 0;
        `
      : css`
          border: ${theme.border.fieldsBase};
        `}

    &:hover {
      ${readOnly
        ? css`
            border-bottom: 1px solid ${theme.colors.borderFocusFields};
            border-radius: 0;
          `
        : css`
            border: ${theme.border.fieldsHover};
          `}
    }

    &:focus-within {
      ${readOnly
        ? css`
            border-bottom: 1px solid ${theme.colors.borderDisabledFields};
            border-radius: 0;
          `
        : css`
            border: ${theme.border.fieldsFocus};
          `}
    }

    ${disabled &&
    css`
      background: rgba(0, 0, 0, 0.05);
    `}
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition, link }) => css`
    color: ${link ? theme.colors.primary : theme.colors.black};
    font-family: ${theme.font.family};
    font-size: 15px;
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xxxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    padding: 2px 0;

    ${
      link &&
      css`
        cursor: pointer;
      `
    }

  &::placeholder {
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${theme.colors.textStrong};
  }
  `}
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const InputFormataded: any = styled(NumberFormat)<IconPositionProps>`
  ${({ theme, iconPosition, link }) => css`
    color: ${link ? theme.colors.primary : theme.colors.black};
    font-family: ${theme.font.family};
    font-size: 15px;
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xxxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ${
      link &&
      css`
        cursor: pointer;
      `
    }

  `}
  &::placeholder {
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #bfbfbf;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colors.textStrong};
    cursor: pointer;
  `}
`

export const Icon = styled.div<Omit<IconPositionProps, 'link'>>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};
    margin-right: 10px;

    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 12px;
    font-weight: 300;
  `}
`

export const CaptionMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textStrong};
  `}
  font-size: 12px;
  font-weight: 300;
`

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: ${(theme: any) => theme.colors.error};
      font-family: ${(theme: any) => theme.font.family};
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
  `,
  disabled: () => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${(theme: any) => theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  hidden: () => css`
    display: none;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled, type }) => css`
    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
    ${type === 'hidden' && wrapperModifiers.hidden()}

    word-wrap: break-word;
  `}
`

export const Length = styled.span<LengthProps>`
  margin-top: 6px;

  ${({ length, maxLength }) => css`
    color: ${maxLength - 10 <= length ? 'red' : 'inherit'};
  `}
`
const iconCss = css`
  width: 20px;
  height: 20px;
  color: #cbcbcb;
  margin-top: 10px;
`

export const Eye = styled(EyeFill)`
  ${iconCss}
`

export const ClosedEye = styled(EyeSlashFill)`
  ${iconCss}
`
export const Example = styled.p<{ titleDirection: 'row' | 'column' }>`
  ${({ theme, titleDirection }) => css`
    color: ${theme.colors.textStrong};

    ${titleDirection === 'column' &&
    css`
      width: 100%;
      display: flex;
      justify-content: flex-end;
    `}
  `}
  font-size: 12px;
  font-weight: 300;
`
export const Title = styled.div<{ titleDirection: 'row' | 'column' }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ titleDirection }) => titleDirection};
  justify-content: space-between;
`
