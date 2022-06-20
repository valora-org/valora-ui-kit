import styled from 'styled-components'
import { GgCircle } from '@styled-icons/fa-brands/'
import {Heading} from '../Heading'

type Color = {
  color: string
}

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMedium} !important;
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'Helvetica', 'Arial', sans-serif;

  .recharts-cartesian-axis-tick-line {
    display: none;
  }

  .recharts-legend-item-text {
    cursor: pointer;
  }

  .recharts-text,
  .recharts-cartesian-axis-tick-value {
    color: ${({ theme }) => theme.colors.textMedium} !important;
    font-weight: 300 !important;
    font-size: 12px !important;
  }

  tspan {
    color: ${({ theme }) => theme.colors.textMedium} !important;
    font-weight: 300 !important;
    font-size: 12px !important;
  }

  svg.recharts-surface tspan {
    color: ${({ theme }) => theme.colors.textMedium} !important;
    font-weight: 300 !important;
    font-size: 12px !important;
  }
`

export const IconCircle = styled(GgCircle)`
  color: ${({ color }: Color) => color};
  width: 12px;
  margin-right: 10px;
`

export const TitleTooltip = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.textIntense};
  font-weight: 600;
  text-transform: capitalize;
`

export const TooltipBox = styled.div`
  padding: 10px;
  border: 1px solid #e5e6e9;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textIntense};
  font-weight: 400;
  flex-direction: column;
`

export const Title = styled(Heading)`
  max-width: 40rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 900;
  color: #2e2e2e;
`

export const TooltipText = styled.div``

export const LegendWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 0 18px;
`

export const LegendItem = styled.div`
  color: ${({ theme }) => theme.colors.textMedium};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
`

export const LegendCircle = styled.div<{ color: string }>`
  width: 7px;
  height: 7px;
  background: ${({ color }) => color};
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 5px;
`
