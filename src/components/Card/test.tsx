import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Card} from '.'

afterEach(cleanup)

describe('<Card />', () => {
  const props = {
    label: 'Progresso',
    value: 15,
    firstFillColor: '#7cafb0',
    secondFillColor: '#91c36e'
  }
  it('should render the heading', () => {
    const { getByTestId } = render(<Card {...props} type="percent" />)

    expect(getByTestId('label')).toBeInTheDocument()
  })
})
