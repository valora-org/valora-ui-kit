import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import {SectionTitle} from '.'

afterEach(cleanup)
describe('<SectionTitle />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<SectionTitle title="SectionTitle" />)

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
