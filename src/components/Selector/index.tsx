import React, { useState, useEffect } from 'react'
import fakeData from './fakeData'
import * as S from './styles'

export type SelectorOptionTypes = {
  name: string
  value?: string | number
  id: string | number
  active: boolean
}

export type SelectorTypes = {
  options: SelectorOptionTypes[]
  onChange?: (selectors: SelectorOptionTypes[]) => void
  onChangeActual?: (selector: SelectorOptionTypes) => void
}

const Selector = ({
  options = fakeData,
  onChange = () => true,
  onChangeActual = () => true
}: SelectorTypes) => {
  const [selectors, setSelectors] = useState(options)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setSelectors(options)
  }, [options])

  const changeSelector = (next: number, actual: number) => {
    next = next < 0 ? selectors.length - 1 : next
    next = next > selectors.length - 1 ? 0 : next

    selectors[actual].active = false
    selectors[next].active = true

    setSelectors(selectors)
    onChangeActual(selectors[next])
    onChange(selectors)
    setUpdate(!update)
  }

  return (
    <S.Wrapper>
      {selectors.map((selector, index) => (
        <S.Selector active={selector.active} key={selector.id}>
          <S.ArrowButton onClick={() => changeSelector(index - 1, index)}>
            <S.ArrowLeft />
          </S.ArrowButton>
          <S.Text> {selector.name} </S.Text>
          <S.ArrowButton onClick={() => changeSelector(index + 1, index)}>
            <S.ArrowRight />
          </S.ArrowButton>
        </S.Selector>
      ))}
    </S.Wrapper>
  )
}

export default Selector
