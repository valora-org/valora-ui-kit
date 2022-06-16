import { useEffect, useState } from 'react'
import * as S from './styles'

export type TabProps = {
  id: number | string
  label: string
  isActive: boolean
  type: string
  dataTestId?: string
}

export type TabsProps = {
  tabs?: TabProps[]
  handleClick?: (param: string) => void
  children?: React.ReactNode
  hasBorderBottomLine?: boolean
  className?: string
}

const Tabs = ({
  tabs = [],
  handleClick,
  hasBorderBottomLine = true,
  children,
  className
}: TabsProps) => {
  const [tabsOnDisplay, setTabsOnDisplay] = useState(tabs)
  const [change, setChange] = useState(false)

  useEffect(() => {
    setTabsOnDisplay(tabs)
  }, [tabs])

  const handleActiveTab = (id?: number | string, type?: string) => {
    if (!id || !type) return

    const indexToInactive = tabsOnDisplay.findIndex((tab) => {
      return tab.isActive === true
    })

    const indexToActive = tabsOnDisplay.findIndex((tab) => {
      return tab.id === id
    })

    tabsOnDisplay[indexToInactive].isActive = false
    tabsOnDisplay[indexToActive].isActive = true

    setTabsOnDisplay(tabsOnDisplay)
    setChange(!change)
    handleClick && handleClick(type)
  }

  return (
 
      <S.Wrapper className={className}>
        <S.TabContent hasLine={hasBorderBottomLine}>
          <S.Tabs className={className}>
            {tabsOnDisplay.map((tab) => (
              <S.Tab
                key={tab.dataTestId}
                isActive={tab.isActive}
                onClick={() => handleActiveTab(tab.id, tab.type)}
                data-testid={tab.dataTestId}
              >
                {tab.label}
              </S.Tab>
            ))}
          </S.Tabs>
        </S.TabContent>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
   
  )
}

export default Tabs
