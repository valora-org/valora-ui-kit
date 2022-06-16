import styled from 'styled-components'
import { CardProps } from '.'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'LB LB'
    'VL GH';
  width: 36rem;
  padding: 10px 10px 0px 10px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  grid-template-rows: 3rem;
  grid-template-columns: 40% 60%;
  -webkit-transition: grid-template-columns 600ms ease-in-out;
  -webkit-transition: grid-template-columns 600ms ease-in-out;
  transition: grid-template-columns 600ms ease-in-out;
  overflow: hidden;
  background: white;
  height: 135px;
  margin-right: 5px;
  position: relative;
`

export const Label = styled.div.attrs({
  'data-testid': 'label'
})`
  grid-area: LB;
  padding: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  font-size: 14px;

  main {
    margin-left: 5px;
  }
`

export const Value = styled.div`
  font-size: ${({ type }: Pick<CardProps, 'type'>) =>
    type === 'currency' ? '20px' : '35px'};
  grid-area: VL;
  padding: 16px 6px;
  color: #252733;
  font-size: 20px;
  overflow: hidden;
  height: 75px;
`

export const Tooltip = styled.div``

export const Graph = styled.div`
  grid-area: GH;
  padding: 6px;
  height: 72px;
`

export const Image = styled.div`
  position: absolute;
  right: 30px;
  height: 100%;
  display: flex;
  align-items: center;
`
