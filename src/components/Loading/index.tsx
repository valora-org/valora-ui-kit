import * as S from './styles'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { CSSProperties } from 'react'
import React from 'react'

const antIcon = (
  <LoadingOutlined style={{ fontSize: 30, color: '#7CAFB0' }} spin />
)

export type SpinTypes = {
  size?: number
  style?: CSSProperties
}

export type LoadingSpinTypes = {
  isAntDesign?: boolean
  fullSpace?: boolean
  height?: number
  calculatedWidth?: boolean
  center?: boolean
  spinOptions?: SpinTypes
}

const Loading = ({
  height = 0,
  fullSpace = false,
  center = false,
  calculatedWidth = false,
  isAntDesign = false,
  spinOptions = {
    size: 30,
    style: undefined
  }
}: LoadingSpinTypes) => {
  return (
    <S.Wrapper
      fullSpace={fullSpace}
      calculatedWidth={calculatedWidth}
      center={center}
      height={height}
    >
      {isAntDesign ? (
        <Spin indicator={antIcon} />
      ) : (
        <S.Spin spinOptions={spinOptions} />
      )}
    </S.Wrapper>
  )
}

export {Loading}
