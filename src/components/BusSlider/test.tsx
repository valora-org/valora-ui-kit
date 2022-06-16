import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'

import BusSlider from '.'

// src/components/BusSlider/test.tsx

const fn = jest.fn()

afterEach(cleanup)
describe('<BusSlider />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <BusSlider labelAfter="Depois" labelBefore="Antes" />
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without labels', () => {
    const { container } = renderWithTheme(<BusSlider />)

    expect(container).toBeInTheDocument()
  })

  it('should render with default', () => {
    const { container } = renderWithTheme(
      <BusSlider defaultValues={[-1, 1]} onChange={fn} />
    )

    expect(container).toBeInTheDocument()
  })
})
