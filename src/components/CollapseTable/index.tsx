import React, { useEffect, useState } from 'react'
import * as S from './styles'
import fakeData from './fakeData'

export type FieldType = {
  name: string
  selector: string
}

export type DataTypes = {
  fields: FieldType[]
  results: any[]
}

export type CollapseTableTypes = {
  fields?: FieldType[]
  results?: any[]
  maxItemsOnFirstPlan?: number
  open?: boolean
}

const CollapseTable = ({
  fields = fakeData.fields,
  results = fakeData.results,
  maxItemsOnFirstPlan = 4,
  open = false
}: CollapseTableTypes) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const calcHeight = () => {
    const len = results.length

    let total = maxItemsOnFirstPlan

    if (maxItemsOnFirstPlan > len) {
      total = len
    }

    return total * 35 + 35
  }

  return (
    <S.Content
      isOpen={isOpen}
      hasOverflow={maxItemsOnFirstPlan < results.length}
      animate={{
        height: isOpen ? `${calcHeight()}px` : '35px'
      }}
      transition={{ type: 'just' }}
    >
      <S.Wrapper>
        <S.Header
          data-testid="vl-header-collapse"
          onClick={() => setIsOpen(!isOpen)}
        >
          <S.WrapperArrow
            animate={{
              transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'
            }}
            transition={{ type: 'just' }}
          >
            <S.Arrow />
          </S.WrapperArrow>
          <S.Row>
            {fields.map((field) => (
              <S.HeadColumns key={field.selector}>{field.name}</S.HeadColumns>
            ))}
          </S.Row>
        </S.Header>
        <S.Body>
          {results.map((result: any, index: number) => (
            <S.Row key={index} isLast={index + 1 === results.length}>
              {fields.map((field) => (
                <S.BodyColumns key={field.selector}>
                  {result[field.selector]}
                </S.BodyColumns>
              ))}
            </S.Row>
          ))}
        </S.Body>
      </S.Wrapper>
    </S.Content>
  )
}

export default CollapseTable
