import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'
import React from 'react'
import { renderWithTheme } from '../../utils/tests'

import TextField from '.'

const fn = jest.fn()

describe('<TextField />', () => {
  it('Renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onData={onInput}
        label="TextField"
        onChange={fn}
        onInput={fn}
        id="TextField"
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
      <TextField
        onData={onInput}
        label="TextField"
        id="TextField"
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
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" id="TextField" data-testid="TextField" />
    )

    const input = screen.getByTestId('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(<TextField label="TextField" id="TextField" disabled />)

    const input = screen.getByText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('have initial value', () => {
    renderWithTheme(
      <TextField label="TextField" id="TextField" initialValue="Text" />
    )
  })

  it('have clear', () => {
    renderWithTheme(
      <TextField label="TextField" id="TextField" clear="clear" onChange={fn} />
    )
  })

  it('have type money', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        id="TextField"
        formated
        typeOfFormat="money"
      />
    )
  })

  it('have type percent', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        id="TextField"
        formated
        typeOfFormat="percent"
      />
    )
  })

  it('have formated', () => {
    renderWithTheme(<TextField label="TextField" id="TextField" formated />)
  })

  it('have and icon password', () => {
    renderWithTheme(
      <TextField label="TextField" id="TextField" type="password" />
    )
  })

  it('have and icon password and click eye', async () => {
    const { getByTestId } = renderWithTheme(
      <TextField label="TextField" id="TextField" type="password" />
    )

    userEvent.click(getByTestId('vl-eye-icon'))
    userEvent.click(getByTestId('vl-eye-icon-close'))
  })

  it('have example ', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        id="TextField"
        example="example"
        titleDirection="column"
      />
    )
  })

  it('have show lenght', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        id="TextField"
        example="example"
        titleDirection="column"
        showLength
      />
    )
  })

  it('have caption message', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        id="TextField"
        example="example"
        titleDirection="column"
        captionMessage="caption"
      />
    )
  })

  it('have icon position right ', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        id="TextField"
        example="example"
        titleDirection="column"
        icon={<span />}
      />
    )
  })
})
