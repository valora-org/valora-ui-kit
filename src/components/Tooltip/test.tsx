import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import {Tooltip} from '.'

afterEach(cleanup)
describe('<VlTooltip />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <Tooltip label="Tooltip">
        <span />
      </Tooltip>
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
