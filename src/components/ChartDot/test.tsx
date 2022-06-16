import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'

import ChartDot from '.'

const props = {
  cx: 10,
  cy: 10,
  stroke: '#FFF'
}

afterEach(cleanup)
describe('<ChartDot />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <ChartDot payload={{ highlight: false }} {...props} />
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the component with highlight = true', () => {
    const { container } = renderWithTheme(
      <ChartDot payload={{ highlight: true }} {...props} />
    )

    expect(container).toBeInTheDocument()
  })

  it('should render the component basic props', () => {
    const { container } = renderWithTheme(
      <ChartDot isActive payload={{ highlight: true }} {...props} />
    )

    expect(container).toBeInTheDocument()
  })

  it('should render the component with active true and highlight false', () => {
    const { container } = renderWithTheme(
      <ChartDot isActive payload={{ highlight: false }} {...props} />
    )

    expect(container).toBeInTheDocument()
  })
})
