import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import VlTooltip from '.'

afterEach(cleanup)
describe('<VlTooltip />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <VlTooltip label="VlTooltip">
        <span />
      </VlTooltip>
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
