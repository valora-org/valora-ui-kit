import { fireEvent, waitFor } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import {FieldSearch} from '.'

const fn = jest.fn()

afterEach(cleanup)
describe('<FieldSearch />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<FieldSearch />)

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change component', async () => {
    const { getByTestId } = renderWithTheme(<FieldSearch />)

    fireEvent.change(getByTestId('vl-fld-search-general'), {
      target: {
        value: 'search'
      }
    })

    await waitFor(() => {
      fireEvent.keyUp(getByTestId('vl-fld-search-general'), {
        target: {
          value: 'search 1'
        }
      })
    })
  })

  it('should render the component', () => {
    renderWithTheme(<FieldSearch loading={fn} />)
  })
})
