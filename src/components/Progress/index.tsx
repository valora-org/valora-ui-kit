import React from 'react'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import * as S from './styles'
export * from './styles'

type GradientColorType = {
  id?: string
  linearGradient0?: string
  linearGradient100?: string
  backgroundColor?: string
  textColor?: string
  clockwise?: boolean
}

export type ProgressProps = {
  percent?: number
  label?: string
  children?: React.ReactNode | string
  className?: string
  gradientColor?: GradientColorType
}

const Progress = ({
  percent = 55,
  label = 'Progresso',
  children,
  className,
  gradientColor = {
    id: 'linear',
    linearGradient0: '#C0DCDC',
    linearGradient100: '#97CCCC',
    backgroundColor: '#7CAFB0',
    clockwise: true
  }
}: ProgressProps) => {
  return (
    <S.WrapperCard>
      <S.Card className={className}>
        <S.SVGLinear>
          <S.Defs>
            <S.LinearGradient id={gradientColor.id}>
              <S.Stop
                offset="0%"
                stopColor={gradientColor.linearGradient0}
                stop-opacity="0"
              />
              <S.Stop
                offset="100%"
                stopColor={gradientColor.linearGradient100}
                stop-opacity="1"
              />
            </S.LinearGradient>
          </S.Defs>
        </S.SVGLinear>
        <S.Wrapper>
          <S.WrapperProgress>
            <S.ProgressCircle
              clockwise={gradientColor.clockwise}
              aria-label="circular-progress-bar"
            >
              <CircularProgressbarWithChildren
                value={percent}
                strokeWidth={9}
                backgroundPadding={3}
                styles={buildStyles({
                  pathColor: `url(#${gradientColor.id})`,
                  trailColor: 'transparent',
                  textColor: gradientColor.textColor,
                  backgroundColor: gradientColor.backgroundColor
                })}
              >
                <S.InternCircle clockwise={gradientColor.clockwise}>
                  {children || `${percent}%`}
                </S.InternCircle>
              </CircularProgressbarWithChildren>
            </S.ProgressCircle>
          </S.WrapperProgress>
        </S.Wrapper>
        <S.Label>{label}</S.Label>
      </S.Card>
    </S.WrapperCard>
  )
}

export {Progress}
