import styled from 'styled-components'
import { ChevronLeft, ChevronRight } from '@styled-icons/entypo'

export const Wrapper = styled.div`
  width: fit-content;
`

export const Selector = styled.div<{ active?: boolean }>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  color: ${({ theme }) => theme.colors.textMedium};
  font-size: 12px;
  font-weight: 400;
  gap: 0 5px;
  justify-content: center;
  align-items: center;
`

export const ArrowButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;

  &:focus {
    background: ${({ theme }) => theme.colors.borderLine};

    svg {
      fill: ${({ theme }) => theme.colors.textStrong};
    }
  }
`

export const ArrowLeft = styled(ChevronLeft)`
  width: 19px;
  height: 19px;
  color: ${({ theme }) => theme.colors.textMedium};
`

export const ArrowRight = styled(ChevronRight)`
  width: 19px;
  height: 19px;
  color: ${({ theme }) => theme.colors.textMedium};
`

export const Text = styled.span``
