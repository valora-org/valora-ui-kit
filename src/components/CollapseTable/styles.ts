import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { ChevronUp } from '@styled-icons/entypo/ChevronUp'

type ContentType = {
  isOpen: boolean
  hasOverflow: boolean
}

export const Content = styled(motion.div)<ContentType>`
  width: 100%;
  height: fit-content;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  overflow: hidden;

  ${({ isOpen, theme, hasOverflow }) =>
    isOpen &&
    css`
      overflow: ${hasOverflow ? 'auto' : 'hidden'};

      ::-webkit-scrollbar-thumb {
        background: transparent;
      }

      &:hover {
        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.primary};
          border-radius: 4px;
        }
      }

      ::-webkit-scrollbar {
        width: 3px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.secondary};
      }
    `}
`

export const Wrapper = styled.table`
  width: 100%;
`

export const Row = styled.tr<{ isLast?: boolean }>`
  ${({ isLast }) =>
    !isLast &&
    css`
      border-bottom: 1px solid #f0f0f0;
    `}
`

export const HeadColumns = styled.th`
  padding: 10px 10px 10px 30px;
  flex: 1;
  color: ${({ theme }) => theme.colors.textStrong};
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
`

export const Body = styled(motion.tbody)`
  width: 100%;
`

export const BodyColumns = styled.td`
  flex: 1;
  padding: 10px 10px 10px 30px;
  color: ${({ theme }) => theme.colors.textStrong};
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`

export const Header = styled.thead`
  width: 100%;
  padding: 10px;
  position: relative;
  cursor: pointer;
`

export const WrapperArrow = styled(motion.div)`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 9px;
  top: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Arrow = styled(ChevronUp)`
  width: 15px;
  height: 15px;
  transform: rotate(180deg);
  color: ${({ theme }) => theme.colors.textStrong};
`
