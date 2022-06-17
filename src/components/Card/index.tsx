import React from 'react'
import { BarChart, Bar } from 'recharts'
import * as S from './styles'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]
export type CardProps = {
  label: string
  value: number
  type: 'number' | 'currency' | 'percent'
  firstFillColor: string
  secondFillColor: string
  tooltip?: JSX.Element
  isImage?: boolean
  image?: JSX.Element
}

const valueDisplay = ({
  value = 0,
  type
}: Pick<CardProps, 'value' | 'type'>) => {
  switch (type) {
    case 'number':
      return value || 0
    case 'currency':
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value || 0)
    default:
      return `${value || 0}%`
  }
}

const Card = ({
  label = 'Progresso',
  value = 0,
  type = 'percent',
  firstFillColor = '#7cafb0',
  secondFillColor = '#91c36e',
  tooltip,
  isImage = false,
  image
}: CardProps) => (
  <S.Wrapper>
    <S.Label>{[label, tooltip]}</S.Label>
    <S.Value type={type}>{valueDisplay({ value, type })}</S.Value>
    {isImage ? (
      <S.Image>{image}</S.Image>
    ) : (
      <S.Graph>
        <BarChart data={data} width={200} height={70}>
          <Bar dataKey="pv" fill={firstFillColor} />
          <Bar dataKey="uv" fill={secondFillColor} />
        </BarChart>
      </S.Graph>
    )}
  </S.Wrapper>
)

export {Card}
