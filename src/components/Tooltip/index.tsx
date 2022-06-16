import React, { useEffect, useState, useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnOutsideClick'
import * as S from './styles'

export type DirectionsTooltipType = {
  arrowTop?: number
  arrowLeft?: number
  tooltipTop?: number
  tooltipLeft?: number
}

export type TooltipTypes = {
  label: string
  breakLine?: boolean
  autoOpen?: boolean
  autoClose?: boolean
  open?: string
  timer?: number
  fullWidth?: boolean
  directions?: DirectionsTooltipType
  children?: React.ReactNode
  invert?: boolean
  toTop?: boolean
}

const Tooltip = ({
  label,
  breakLine = false,
  autoOpen = false,
  open = '',
  timer = 7000,
  fullWidth = false,
  autoClose = false,
  invert = false,
  toTop = false,
  directions,
  children
}: TooltipTypes) => {
  const ref = useRef(null)
  const [lastId, setLastId] = useState('')
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    if (autoOpen && open !== lastId) {
      setLastId(open)
      setOpened(true)

      if (autoClose) {
        setTimeout(() => {
          setOpened(false)
        }, timer)
      }
    }
  }, [autoClose, autoOpen, lastId, open, timer])

  useOnClickOutside(ref, () => setOpened(false))

  return (
    <S.Wrapper fullWidth={fullWidth}>
      <S.Tooltip
        invert={invert}
        toTop={toTop}
        ref={ref}
        autoOpen={autoOpen}
        open={opened}
        breakLine={breakLine}
        aria-label={label}
        directions={directions}
      >
        <S.Child toTop={toTop} invert={invert}>
          {children || <S.IconInfo />}
        </S.Child>
      </S.Tooltip>
    </S.Wrapper>
  )
}

export default Tooltip
