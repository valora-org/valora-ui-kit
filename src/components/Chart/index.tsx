/* eslint-disable @typescript-eslint/ban-types */
import React, { useState, useEffect } from 'react'
import {
  XAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  ComposedChart,
  Area,
  CartesianGrid,
  YAxis
} from 'recharts'
import * as S from './styles'
import ChartDot from '../ChartDot'
import CustomizeLegend from './Legend'
import theme from '../../styles/theme'
import chartDatas from './datas'
import { tooltipParserChart } from '../../utils/helpers'

type GradientsType = {
  offset: string
  gradientColor: string
  opacity: number
}

type LegendType = {
  dataKey: string
}

type AreaTypes = {
  name: string
  lineColor?: string
  dotColor?: string
  hide: boolean
  serie: string
  type: string
  gradients?: GradientsType[]
  areaId?: string
}

export type ChartProps = {
  title?: string
  datas?: any
  area?: AreaTypes[]
  isMoney?: boolean
}

export type InsidePayloadType = {
  actual_prices: number
  highlight: boolean
  name: string
  reference_prices: number
}

export type PayloadProps = {
  name: string
  stroke: string
  value: number
  payload: InsidePayloadType
}

export type TooltipProps = {
  active: boolean
  payload: any
  label: string
  name: string
  value: string
  stroke: string
  highlight: boolean
}
const valueDisplay = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value
  )

const Chart = ({
  datas = chartDatas.series,
  area = chartDatas.areas,
  isMoney = true
}: ChartProps) => {
  const [data, setData] = useState(datas)
  const [areas, setAreas] = useState(area)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setData(datas)
    setAreas(area)
  }, [datas, area])

  /** função que remove a linha do gráfico ao ser clicada na label */
  const handleChangeHideLine = ({ dataKey }: LegendType) => {
    const index = areas.findIndex((area) => area.serie === dataKey)
    if (index < 0) return

    areas[index].hide = !areas[index].hide

    setAreas(areas)
    setUpdate(!update)
  }

  return (
    <S.Wrapper>
      <ResponsiveContainer>
        <ComposedChart
          width={100}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          {areas.map(({ type, gradients, areaId }) => {
            return (
              type === 'area' && (
                <defs>
                  <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
                    {gradients &&
                      gradients.map((gradient) => (
                        <stop
                          key={gradient.gradientColor}
                          offset={gradient.offset}
                          stopColor={gradient.gradientColor}
                          stopOpacity={gradient.opacity}
                        />
                      ))}
                  </linearGradient>
                </defs>
              )
            )
          })}

          <Tooltip
            content={(event: TooltipProps) => (
              <S.TooltipBox>
                <S.TitleTooltip>
                  {event.payload &&
                    event.payload[0] &&
                    tooltipParserChart(event.payload[0].payload.name)}
                </S.TitleTooltip>
                {event?.payload &&
                  event?.payload.map(
                    ({ name, value, stroke, payload }: PayloadProps) => (
                      <S.TooltipText key={name}>
                        <S.IconCircle
                          color={
                            payload.highlight
                              ? theme.colors.baseColorRedDark
                              : stroke
                          }
                        />
                        {`${name}: ${
                          isMoney ? valueDisplay(Number(value)) : Number(value)
                        }`}
                      </S.TooltipText>
                    )
                  )}
              </S.TooltipBox>
            )}
          />
          <CartesianGrid height={1} strokeWidth={0.4} />
          <XAxis dataKey="name" stroke="0.4" />
          <YAxis axisLine={false} width={20} />
          <Legend
            onClick={handleChangeHideLine}
            content={CustomizeLegend}
            align="left"
          />

          {areas.map((props) => {
            return props.type === 'line' ? (
              <Line
                key={props.serie}
                type="monotone"
                dataKey={props.serie}
                stroke={props.lineColor}
                activeDot={(props) => <ChartDot isActive {...props} />}
                name={props.name}
                hide={props.hide}
                fill={props.dotColor}
                dot={(props) => <ChartDot {...props} />}
              />
            ) : (
              <Area
                type="monotone"
                dataKey={props.serie}
                key={props.serie}
                name={props.name}
                hide={props.hide}
                fill={`url(#${props.areaId})`}
                activeDot={(props) => <ChartDot isActive {...props} />}
                stroke={props.lineColor}
                dot={(props) => <ChartDot {...props} />}
              />
            )
          })}
        </ComposedChart>
      </ResponsiveContainer>
    </S.Wrapper>
  )
}

export default Chart
