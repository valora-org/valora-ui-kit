import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ChevronRight } from '@styled-icons/entypo'

export const Wrapper = styled(motion.div)`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderLine};

  padding: 0 20px;
  overflow: hidden;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 20px;
  width: 100%;
  height: 82.59px;
  align-items: center;
`

export const ArrowBtn = styled(motion.button)`
  outline: none;
  border: none;
  background: transparent;
`

export const ArrowIcon = styled(ChevronRight)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.textHardStrong};
  }
  color: ${({ theme }) => theme.colors.textMedium};
`

export const Body = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: hidden auto;
  padding-bottom: 20px;

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.borderDisabledFields};
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.neutral};
  }
`
