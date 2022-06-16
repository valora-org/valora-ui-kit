import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .ant-slider-dot-active {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
export const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.textStrong};
  margin-bottom: 5px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0 10px;
`

export const Label = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textStrong};
  font-weight: 300;
  margin-top: -18px;
`
