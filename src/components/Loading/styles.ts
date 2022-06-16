import styled, { css, keyframes } from 'styled-components'
import { LoadingSpinTypes, SpinTypes } from '.'
import { LoadingOutlined } from '@ant-design/icons'

export const Wrapper = styled.div<LoadingSpinTypes>`
  width: ${({ fullSpace }) => (fullSpace ? '100%' : 'fit-content')};
  height: ${({ height }) => `${height}px`};

  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${({ calculatedWidth }) =>
    calculatedWidth &&
    css`
      width: calc(100vw - 542px);
    `}
`

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const Spin = styled.div<{ spinOptions: SpinTypes }>`
  width: ${({ spinOptions }) => `${spinOptions.size}px`};
  height: ${({ spinOptions }) => `${spinOptions.size}px`};
  border: double 2px transparent;
  border-radius: 50%;
  background-image: linear-gradient(white, white),
    linear-gradient(82.67deg, #145277 -1.79%, #83d0cb 92.13%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: ${loader} linear infinite 1s;
`

export const Loading: any = styled(LoadingOutlined).attrs({
  spin: true
})`
  color: #7cafb0;
  font-size: 30px;
`
