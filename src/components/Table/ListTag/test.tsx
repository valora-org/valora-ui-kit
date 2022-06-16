import { renderWithTheme } from '../../../utils/tests'
import { cleanup } from '@testing-library/react'
import React from 'react'
import ListTag from '.'

/** yarn test src/components/ListTag/test.tsx  */

afterEach(cleanup)
describe('<ListTag />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<ListTag label="ListTag" />)

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
