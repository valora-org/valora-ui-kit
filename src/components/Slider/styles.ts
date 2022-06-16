import styled, { css, DefaultTheme } from 'styled-components'
import { SliderProps } from '.'
import { Slider as AntdSlider } from 'antd'

type WrapperProps = Pick<SliderProps, 'disabled'> & {
  error?: boolean
}

export const InputWrapper = styled.div<{ content: any }>`
  ${({ theme }) => css`
    display: flex;
    font-family: ${theme.font.family};
    width: 100%;
    height: 45px;
    position: relative;
  `}

  input[type='range']::-webkit-slider-thumb {
    width: 25px;
    height: 25px;
    border-radius: 4px;
    ${({ theme }) => css`
      background: ${theme.colors.primary};
    `}
    cursor: pointer;
    -webkit-appearance: none;
    position: relative;
    top: -10px;
    position: relative;

    &:hover {
      ${({ theme }) => css`
        background: ${theme.colors.primaryHover};
      `}
    }

    &::after {
      content: 'A';
      position: absolute;
      bottom: 0;
    }
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 1px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  input[type='range']:hover {
    opacity: 1;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: linear-gradient(120deg, #efefef, #dadada 42%, #d8d8d8);
    border-radius: 1.3px;
    z-index: 10;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: linear-gradient(120deg, #efefef, #dadada 42%, #d8d8d8);
    z-index: 3;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #3071a9;
    border-radius: 1.3px;
    z-index: 10;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
    z-index: 10;
  }
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: 15px;
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: #FF6347;
      font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    ${Input} {
      cursor: not-allowed;
      color: #8F8F8F;

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
export const TextInBottom = styled.div<{ value: any }>`
  width: 100;
  height: 20px;
  margin-top: 5px;
`

export const TextValue = styled.output`
  background: red;
  color: white;
  padding: 4px 12px;
  position: absolute;
  border-radius: 4px;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: red;
    top: -1px;
    left: 50%;
  }
`
export const InputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const LeftText = styled.div`
  margin-right: 10px;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 300;
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.colors.textStrong};
  `}
`
export const RightText = styled.div`
  margin-left: 10px;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 300;
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.colors.textStrong};
  `}
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
    font-size: 12px;
    font-weight: 300;
  `}
`
export const Slider: any = styled(AntdSlider)``
