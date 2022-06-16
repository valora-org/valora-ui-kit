import * as S from './styles'
import React from 'react'
export * as Styles from './styles'
import VlTooltip from '../../Tooltip'

export type ListTagTypes = {
  label: string | React.ReactNode
  color?: 'success' | 'info' | 'warning' | 'default' | 'danger' | 'dark'
  rounded?: boolean
  tooltipLabel?: string
  tooltipBreakLine?: boolean
}

const ListTag = ({
  label,
  tooltipLabel,
  tooltipBreakLine = false,
  color = 'default',
  rounded = false
}: ListTagTypes) => {
  if (tooltipLabel) {
    return (
      <VlTooltip breakLine={tooltipBreakLine} label={tooltipLabel}>
        <S.Wrapper rounded={rounded} color={color}>
          {label}
        </S.Wrapper>
      </VlTooltip>
    )
  }

  return (
    <S.Wrapper rounded={rounded} color={color}>
      {label}
    </S.Wrapper>
  )
}

export default ListTag
