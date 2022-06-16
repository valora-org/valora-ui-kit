import { FieldType } from '.'

export const mockFields: FieldType[] = [
  {
    key: 1,
    name: 'Empresa',
    selector: 'company_owner'
  },
  {
    key: 2,
    name: 'Linha',
    selector: 'line'
  },
  {
    key: 3,
    name: 'Status',
    selector: 'status'
  },
  {
    key: 4,
    name: 'Algoritmos',
    selector: 'algorithms'
  }
]

export const mockResults = [
  {
    id: '1',
    company_owner: 'Itamarati',
    line: '123',
    status: 'Inativo',
    algorithms: '2 Algoritmos',
    children: [
      {
        id: '1.1',
        company_owner: '14455',
        line: '321',
        status: 'Ativo',
        algorithms: '3 Algoritmos'
      },
      {
        id: '1.12',
        company_owner: '14455',
        line: '321',
        status: 'Ativo',
        algorithms: '3 Algoritmos'
      }
    ]
  },
  {
    id: '2',
    company_owner: 'Unidas',
    line: '321',
    status: 'Ativo',
    algorithms: '3 Algoritmos'
  },
  {
    id: '3',
    company_owner: 'Ouro Preto',
    line: '456',
    status: 'Ativo',
    algorithms: '1 Algoritmo'
  },
  {
    id: '4',
    company_owner: '1001',
    line: '1001',
    status: 'Ativo',
    algorithms: '50 Algoritmos'
  }
]
