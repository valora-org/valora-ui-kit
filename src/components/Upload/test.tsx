import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'

import Upload from '.'

afterEach(cleanup)
describe('<Upload />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<Upload label="Upload" />)

    expect(container).toBeInTheDocument()
  })
})
