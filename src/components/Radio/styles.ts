import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.div<{
  hasTitle: boolean
  error: boolean
  checked: boolean | undefined
  disabled: boolean | undefined
}>`
  display: flex;
  align-items: center;
  border: 1.3px solid
    ${({ theme, error, checked, disabled }) =>
      disabled
        ? theme.colors.borderDisabledFields
        : error
        ? theme.colors.error
        : checked
        ? theme.colors.primary
        : theme.colors.borderFields};

  padding: 11px 14px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 18px;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;

  &:hover {
    border: 1.3px solid ${({ theme }) => theme.colors.borderFocusFields};
  }
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: transparent;
  z-index: 10;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.textStrong};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      border: 0.2rem solid ${theme.colors.borderDisabledFields};
      &:before {
        content: '';
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${theme.colors.borderDisabledFields};
      }
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
      border: 0.2rem solid ${theme.colors.primary};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }

    &:checked {
      border: 0.2rem solid ${theme.colors.primary};
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<RadioProps, 'disabled'>>`
  ${({ theme, disabled }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${disabled
      ? theme.colors.borderDisabledFields
      : theme.colors.textStrong};
    line-height: 1;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    font-size: 14px;
  `}
`
export const Title = styled.div`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colors.textStrong};

    white-space: nowrap;
    position: absolute;
  `}
`
export const CaptionMessage = styled.div`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: 300;
    color: ${theme.colors.textStrong};

    position: absolute;
    white-space: nowrap;
    bottom: 20px;
  `}
`

export const Content = styled.div<{ bottomMessage: boolean; error: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  height: fit-content;
  padding-bottom: ${({ bottomMessage, error }) =>
    bottomMessage ? 40 : error ? 20 : 0}px;
  /* background: red; */
`
export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 12px;
    font-weight: 300;
    position: absolute;
    white-space: nowrap;
    bottom: 0;
  `}
`
