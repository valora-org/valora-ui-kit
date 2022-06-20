/* eslint-disable react/display-name */
import React from 'react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Chart} from '.'
import { renderWithTheme } from '../../utils/tests'

const data = {
  title: 'Título teste',
  data: [
    { name: '04/11 18:18"', idx: 1, idxx: 0.01 },
    { name: '05/11 15:22', idx: 2, idxx: 0.01 },
    { name: '05/11 15:22', idx: 3, idxx: 0.01 },
    { name: '05/11 15:22', idx: 4, idxx: 0.01 }
  ],
  areas: [
    {
      name: 'Ciclo Modelo 1',
      lineColor: '#7cafb0',
      dotColor: '#91c36e',
      serie: 'idx'
    }
  ]
}
afterEach(cleanup)

describe('<Chart />', () => {
  it('should render the default values', () => {
    const { container } = renderWithTheme(<Chart {...data} isMoney />)

    expect(container).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the default values', () => {
    const { container } = renderWithTheme(<Chart />)

    expect(container).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should hover tooltip', () => {
    const { container } = renderWithTheme(<Chart {...data} isMoney />)

    expect(container).toMatchSnapshot()
  })
})
