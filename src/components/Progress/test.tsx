import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'

import Progress from '.'
afterEach(cleanup)
describe('<Progress />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <Progress percent={50}>
        <h1>50%</h1>
      </Progress>
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the children', () => {
    const { getByTestId } = renderWithTheme(
      <Progress percent={50}>
        <h1 data-testid="html">50%</h1>
      </Progress>
    )

    expect(getByTestId('html')).toBeInTheDocument()
  })
})
