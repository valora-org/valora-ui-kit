import { cleanup } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import Section from '.'

afterEach(cleanup)
describe('<Section />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <Section title="Section">
        <span />
      </Section>
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the component', () => {
    renderWithTheme(
      <Section title="Section" description="ok" bottomMessage="bottommessage">
        <span />
      </Section>
    )
  })
})
