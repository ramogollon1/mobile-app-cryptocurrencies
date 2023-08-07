import React, { render, fireEvent } from '@testing-library/react-native'
import PriceAndAmountInput from './PriceAndAmountInput'

test('changes value when typing', () => {
  const mockSetPrice = jest.fn()
  const mockSetAmount = jest.fn()
  const { getByPlaceholderText } = render(
    <PriceAndAmountInput
      price="0"
      setPrice={mockSetPrice}
      amount="0"
      setAmount={mockSetAmount}
    />,
  )

  fireEvent.changeText(getByPlaceholderText('Price'), '200')
  expect(mockSetPrice).toHaveBeenCalledWith('200')

  fireEvent.changeText(getByPlaceholderText('Amount'), '10')
  expect(mockSetAmount).toHaveBeenCalledWith('10')
})
