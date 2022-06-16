import { Story, Meta } from '@storybook/react/types-6-0'
import Table, { TableTypes } from '../src/components/Table'

const args: TableTypes = {
  is_superuser: true,
  columns: [
    {
      name: "Empresa",
      selector: "company_owner",
      sortable: false,
    },
    {
      name: "Nome",
      selector: "name",
      sortable: true,
    },
    {
      name: "Número da linha",
      selector: "number",
      sortable: false,
    },
    {
      name: "Classe",
      selector: "busclass",
      sortable: false,
    },
    {
      name: "Quantidade de trechos",
      selector: "count_stretches",
      sortable: false,
    }
  ],
  results: [
    {
        id: 7588,
        name: "TesteLunaCaio - 1234",
        company_owner: 'Valora',
        number: "1234",
        busclass: "Executivo",
        count_stretches: 2,
        key: 7588
    },
    {
      id: 7589,
      name: "TesteLunaCaio - 1234",
      company_owner: 'Valora',
      number: "1234",
      busclass: "Executivo",
      count_stretches: 2,
      key: 7589
    }
  ]
}

export default {
  title: 'Table',
  component: Table,
  args
} as Meta

export const Default: Story<TableTypes> = (args) => <Table {...args} />
