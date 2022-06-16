import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${theme.colors.progressColor};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0.5px 1px 0.01px ${theme.colors.progressShadow};
  `}
`

export const Stroke = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InternCircle = styled.div<{ clockwise?: boolean }>`
  ${({ theme, clockwise }) => css`
    width: 82px;
    height: 82px;
    flex-shrink: 0;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0.8px 1px 0.01px ${theme.colors.progressShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    ${clockwise &&
    css`
      transform: scaleX(-1);
    `}
  `}
`

export const WrapperProgress = styled.div`
  display: grid;
  grid-template-areas:
    'PC PC'
    'PC PC'
    'LB LB';
  width: 18rem;
  background: black;
  padding: 0px;
  border-radius: 6px;
  grid-template-rows: 4rem;
  grid-template-columns: 40% 60%;
  -webkit-transition: grid-template-columns 600ms ease-in-out;
  -webkit-transition: grid-template-columns 600ms ease-in-out;
  transition: grid-template-columns 600ms ease-in-out;
  background: transparent;
`

export const Label = styled.div.attrs({
  'aria-label': 'label'
})`
  margin-top: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.textStrong};
`

export const ProgressCircle = styled.div<{ clockwise?: boolean }>`
  grid-area: PC;
  margin: 0 auto;
  text-align: center;
  transform: scaleX(-1);

  ${({ clockwise }) =>
    clockwise &&
    css`
      transform: scaleX(-1);
    `}
`

export const WrapperCard = styled.div`
  padding: 1px;
  /* width: fit-content; */
  height: fit-content;
  border-radius: 10px;
  width: 100%;
  background-image: linear-gradient(
    120.09deg,
    rgba(192, 220, 220, 0.25) 9.44%,
    rgba(152, 206, 206, 0.25) 42.48%,
    rgba(141, 189, 189, 0.25) 86.96%
  );
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
`

export const Card = styled.div`
  width: 150px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;

  &.vl-first-progress-dashboard {
    height: 250px;
    flex: 1;
    min-width: 120px;
    width: 100%;

    @media (max-width: 1681px) {
      height: 210px;
    }

    @media (max-width: 1249px) {
      width: 130px;
      height: 160px;
    }

    @media (max-width: 1129px) {
      width: 100%;
      height: 230px;
    }

    @media (max-width: 906px) {
      height: 210px;
    }

    @media (max-width: 838px) {
      height: 188px;
    }
  }
`

export const LinearGradient = styled.linearGradient.attrs({
  x1: '0%',
  y1: '0%',
  y2: '100%',
  x2: '0%'
})``

export const SVGLinear = styled.svg`
  width: 0px;
  height: 0px;
  visibility: hidden;
`

export const Defs = styled.defs``

export const Stop = styled.stop``
