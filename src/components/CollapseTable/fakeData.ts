import { DataTypes } from '.'

const fakeData: DataTypes = {
  fields: [
    {
      name: 'Id Externo',
      selector: 'external_id'
    },
    {
      name: 'Preço atual',
      selector: 'actual'
    },
    {
      name: 'Data de início',
      selector: 'start'
    },
    {
      name: 'Data do término',
      selector: 'end'
    }
  ],
  results: [
    {
      external_id: 'vlp',
      actual: 'R$111',
      start: '02/07/2021',
      end: '03/07/2021'
    },
    {
      external_id: 'vlp',
      actual: 'R$111',
      start: '02/07/2021',
      end: '03/07/2021'
    },
    {
      external_id: 'vlp',
      actual: 'R$111',
      start: '02/07/2021',
      end: '03/07/2021'
    },
    {
      external_id: 'vlp',
      actual: 'R$111',
      start: '02/07/2021',
      end: '03/07/2021'
    },
    {
      external_id: 'vlp',
      actual: 'R$111',
      start: '02/07/2021',
      end: '03/07/2021'
    }
  ]
}

export const fakeData2: DataTypes = {
  fields: [
    {
      name: 'Id Externo',
      selector: 'external_id'
    },
    {
      name: 'Preço atual',
      selector: 'actual'
    },
    {
      name: 'Data de início',
      selector: 'start'
    },
    {
      name: 'Data do término',
      selector: 'end'
    }
  ],
  results: [
    {
      external_id: 'vlp',
      actual: 'R$111',
      start: '02/07/2021',
      end: '03/07/2021'
    },
    {
      external_id: 'vlp',
      actual: 'R$111',
      start: '02/07/2021',
      end: '03/07/2021'
    }
  ]
}

export default fakeData
