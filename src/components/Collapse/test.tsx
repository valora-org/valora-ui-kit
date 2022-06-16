import { renderWithTheme } from '../../utils/tests'
import { cleanup } from '@testing-library/react'

import Collapse from '.'

/** yarn test src/components/Collapse/test.tsx  */

afterEach(cleanup)
describe('<Collapse />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<Collapse onOpen={jest.fn()} open header={<span/>} ><span/></Collapse>)

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
