import styled, { css } from 'styled-components'
import { Search } from '@styled-icons/bootstrap/Search'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  width: fit-content;
  cursor: pointer;
  padding: 5.5px 5px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: box-shadow 0.5s;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primaryHover};
    box-shadow: 0px 0px 5px 0px rgba(124, 175, 176, 0.75);
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primaryHover};
  }
`

export const Input = styled(motion.input)`
  width: calc(100% - 18px);
  outline: none;
  border: none;
  font-size: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.cloudyBlue};
    font-size: 15px;
  }
`
export const SearchIcon = styled(Search)<{ isFocused: boolean }>`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.primary};

  ${({ isFocused }) =>
    !isFocused &&
    css`
      margin: 0 4.5px;
    `}
`
