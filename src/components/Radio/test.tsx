import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../utils/tests'
import React from 'react'
import {Radio} from '.'

const fn = jest.fn()

describe('<Radio />', () => {
  it('should render with label (black)', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />
    )

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    userEvent.click(screen.getByLabelText('Radio'))
  })

  it('Should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />)

    const radio = screen.getByLabelText('Radio')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })

  it('Should be default checked', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" defaultChecked />)
  })

  it('Should be default caption message', () => {
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        captionMessage="text"
        noFirstRadio={false}
      />
    )
  })

  it('Should be default error', () => {
    renderWithTheme(
      <Radio
        title="text"
        label="Radio"
        labelFor="Radio"
        error="text"
        noFirstRadio={false}
      />
    )
  })

  it('Should be default error', () => {
    renderWithTheme(
      <Radio
        title="text"
        label="Radio"
        labelFor="Radio"
        error="text"
        prevCheck={fn}
      />
    )
  })
})
