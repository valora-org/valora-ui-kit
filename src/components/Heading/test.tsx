import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import {Heading} from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>anything</Heading>)
    expect(screen.getByRole('heading', { name: /anything/i })).toHaveStyle({
      color: 'rgb(3, 5, 23)'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">anything</Heading>)
    expect(screen.getByRole('heading', { name: /anything/i })).toHaveStyle({
      'font-size': '15px'
    })
  })
})
