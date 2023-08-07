import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Input from './Input'

describe('Input', () => {
  test('updates its value when text is entered', () => {
    const setValue = jest.fn()
    const { getByPlaceholderText } = render(
      <Input placeholder="Test input" value="" setValue={setValue} />,
    )

    const input = getByPlaceholderText('Test input')
    fireEvent.changeText(input, '100')

    expect(setValue).toHaveBeenCalledWith('100')
  })

  test('does not update its value when non-numeric text is entered', () => {
    const setValue = jest.fn()
    const { getByPlaceholderText } = render(
      <Input placeholder="Test input" value="" setValue={setValue} />,
    )

    const input = getByPlaceholderText('Test input')
    fireEvent.changeText(input, 'invalid')

    expect(setValue).not.toHaveBeenCalled()
  })
})
