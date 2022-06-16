import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import Grid, { field, result } from '.'

describe('<Grid />', () => {
  const props = {
    fields: field,
    results: result,
    maxItemsOnFirstPlan: 5
  }

  it('should render the component', () => {
    const { container } = renderWithTheme(<Grid {...props} />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should height is 211px', () => {
    const { getByTestId } = renderWithTheme(<Grid {...props} />)

    const wrapper = getByTestId('wrapper')

    expect(wrapper).toHaveStyle({ maxHeight: '211px' })
  })
})
