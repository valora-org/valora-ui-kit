import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'
import React from 'react'
import { renderWithTheme } from '../../utils/tests'

import {Field} from '.'

const fn = jest.fn()

describe('<Field />', () => {
  it('Renders without Label', () => {
    renderWithTheme(<Field />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<Field placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    renderWithTheme(<Field icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <Field icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <Field
        onData={onInput}
        label="Field"
        onChange={fn}
        onInput={fn}
        id="Field"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <Field
        onData={onInput}
        label="Field"
        id="Field"
        disabled
        onChange={fn}
        onInput={fn}
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <Field
        icon={<Email data-testid="icon" />}
        label="Field"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <Field label="Field" id="Field" data-testid="Field" />
    )

    const input = screen.getByTestId('Field')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(<Field label="Field" id="Field" disabled />)

    const input = screen.getByText('Field')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('have initial value', () => {
    renderWithTheme(
      <Field label="Field" id="Field" initialValue="Text" />
    )
  })

  it('have clear', () => {
    renderWithTheme(
      <Field label="Field" id="Field" clear="clear" onChange={fn} />
    )
  })

  it('have type money', () => {
    renderWithTheme(
      <Field
        label="Field"
        id="Field"
        formated
        typeOfFormat="money"
      />
    )
  })

  it('have type percent', () => {
    renderWithTheme(
      <Field
        label="Field"
        id="Field"
        formated
        typeOfFormat="percent"
      />
    )
  })

  it('have formated', () => {
    renderWithTheme(<Field label="Field" id="Field" formated />)
  })

  it('have and icon password', () => {
    renderWithTheme(
      <Field label="Field" id="Field" type="password" />
    )
  })

  it('have and icon password and click eye', async () => {
    const { getByTestId } = renderWithTheme(
      <Field label="Field" id="Field" type="password" />
    )

    userEvent.click(getByTestId('vl-eye-icon'))
    userEvent.click(getByTestId('vl-eye-icon-close'))
  })

  it('have example ', () => {
    renderWithTheme(
      <Field
        label="Field"
        id="Field"
        example="example"
        titleDirection="column"
      />
    )
  })

  it('have show lenght', () => {
    renderWithTheme(
      <Field
        label="Field"
        id="Field"
        example="example"
        titleDirection="column"
        showLength
      />
    )
  })

  it('have caption message', () => {
    renderWithTheme(
      <Field
        label="Field"
        id="Field"
        example="example"
        titleDirection="column"
        captionMessage="caption"
      />
    )
  })

  it('have icon position right ', () => {
    renderWithTheme(
      <Field
        label="Field"
        id="Field"
        example="example"
        titleDirection="column"
        icon={<span />}
      />
    )
  })
})
