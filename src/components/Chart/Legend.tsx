import { LegendProps } from 'recharts'
import * as S from './styles'

const CustomizeLegend = ({ payload, onClick = () => true }: LegendProps) => {
  return (
    <S.LegendWrapper>
      {payload &&
        payload.map((entry: any, index: any) => (
          <S.LegendItem onClick={() => onClick(entry)} key={`item-${index}`}>
            <S.LegendCircle color={entry.color} />
            {entry.value}
          </S.LegendItem>
        ))}
    </S.LegendWrapper>
  )
}

export default CustomizeLegend
