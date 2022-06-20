import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import {NumberCard} from '.'

afterEach(cleanup)
describe('<NumberCard />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <NumberCard text="NumberCard" number="23" />
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
