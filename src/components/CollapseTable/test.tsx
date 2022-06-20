import { cleanup } from '@testing-library/react'
import { fakeData2 } from './fakeData'
import {CollapseTable} from '.'
import React from 'react'
import { renderWithTheme } from '../../utils/tests'
import userEvent from '@testing-library/user-event'

/** yarn test src/components/CollapseTable/test.tsx  */

afterEach(cleanup)
describe('<CollapseTable />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<CollapseTable />)

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should click and open component', () => {
    const { getByTestId } = renderWithTheme(<CollapseTable />)

    const header = getByTestId('vl-header-collapse')

    userEvent.click(header)
  })

  it('should click and open component', () => {
    const { getByTestId } = renderWithTheme(
      <CollapseTable fields={fakeData2.fields} results={fakeData2.results} />
    )

    const header = getByTestId('vl-header-collapse')

    userEvent.click(header)
  })
})
