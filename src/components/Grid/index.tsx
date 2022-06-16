import * as S from './styles'
import React from 'react'

type FieldsProps = {
  name: string
  selector: string
}

export type GridType = {
  fields: FieldsProps[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any[]
  maxItemsOnFirstPlan: number
}

export const field = [
  {
    name: 'ID Externo',
    selector: 'id_extern'
  },
  {
    name: 'Início das vendas',
    selector: 'start'
  },
  {
    name: 'Fim das',
    selector: 'end'
  },
  {
    name: 'Empresa',
    selector: 'company'
  }
]

export const result = [
  {
    id_extern: 'VLKD32',
    start: '10/12/2020',
    end: '15/12/2021',
    company: 'Itamarati'
  },
  {
    id_extern: 'VLHLD',
    start: '10/12/2020',
    end: '16/12/2021',
    company: 'União'
  },
  {
    id_extern: 'VLKD32',
    start: '10/12/2020',
    end: '15/12/2021',
    company: 'Itamarati'
  },
  {
    id_extern: 'VLHLD',
    start: '10/12/2020',
    end: '16/12/2021',
    company: 'União'
  },
  {
    id_extern: 'VLKD32',
    start: '10/12/2020',
    end: '15/12/2021',
    company: 'Itamarati'
  }
]

const Grid = ({
  fields = field,
  results = result,
  maxItemsOnFirstPlan = 5
}: GridType) => {
  return (
    <S.Wrapper limit={maxItemsOnFirstPlan} data-testid="wrapper">
      <S.Table data-testid="table">
        <S.Line>
          {fields.map((field) => (
            <S.Column key={field.selector}>{field.name}</S.Column>
          ))}
        </S.Line>

        {results.map((result, index) => (
          <S.Line key={index}>
            {fields.map((field) => (
              <S.Item key={field.selector}>{result[field.selector]}</S.Item>
            ))}
          </S.Line>
        ))}
      </S.Table>
    </S.Wrapper>
  )
}

export default Grid
