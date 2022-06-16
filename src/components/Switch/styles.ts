import styled from 'styled-components'
import { Switch as VLSwitch } from 'antd'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;

  .ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-switch-checked:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.clearPrimary};
  }
`

export const Switch = styled(VLSwitch)``

export const Label = styled.p<{ color: string }>`
  font-size: 1.25rem;
  color: ${({ color }) => color};
`
