import { renderWithTheme } from 'utils/tests/helpers'

import Tabs from '.'

const handleClickMock = jest.fn()

const TabsValues = [
  {
    id: 1,
    label: 'Ativo',
    isActive: true,
    type: 'active'
  },
  {
    id: 2,
    label: 'Inativo',
    isActive: false,
    type: 'inactive'
  },
  {
    id: 3,
    label: 'Agendado',
    isActive: false,
    type: 'scheduled'
  },
  {
    id: 4,
    label: 'Cancelado',
    isActive: false,
    type: 'incomplete'
  }
]

describe('<Tabs />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <Tabs tabs={TabsValues} handleClick={handleClickMock}>
        <h1>List</h1>
      </Tabs>
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
