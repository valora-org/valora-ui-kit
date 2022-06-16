import theme from '../../styles/theme'
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests'
import Block from '.'

// src/components/Block/test.tsx

describe('<Block />', () => {
  it('Renders without Label', () => {
    renderWithTheme(<Block>Test</Block>)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
  it('should render component', () => {
    renderWithTheme(
      <Block label="Ma test">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minus ducimus delectus numquam architecto, voluptate quia molestias ad eum dignissimos facilis tenetur distinctio, modi totam dolores officiis earum. Ab, voluptatum!
      </Block>
    )
    expect(screen.getByText(/Ma test/i)).toBeInTheDocument()
  })
  it('should render with all styles', () => {
    renderWithTheme(
      <Block label="Ma test">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minus ducimus delectus numquam architecto, voluptate quia molestias ad eum dignissimos facilis tenetur distinctio, modi totam dolores officiis earum. Ab, voluptatum!
      </Block>
    )
    expect(screen.getByText(/Ma test/i)).toHaveStyleRule(
      'background',
      theme.colors.white
    )
  })
})
