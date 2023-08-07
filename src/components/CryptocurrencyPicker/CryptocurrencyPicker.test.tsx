import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { CryptocurrencyPicker } from './CryptocurrencyPicker'
import { Cryptocurrency } from '../../models/Order'

describe('CryptocurrencyPicker', () => {
  test('sets the selected value correctly', () => {
    const setCryptocurrency = jest.fn()
    const { getByTestId } = render(
      <CryptocurrencyPicker
        cryptocurrency={Cryptocurrency.BTC}
        setCryptocurrency={setCryptocurrency}
      />,
    )

    const picker = getByTestId('cryptocurrencyPicker')
    fireEvent(picker, 'onValueChange', Cryptocurrency.ETH)

    expect(setCryptocurrency).toHaveBeenCalledWith(Cryptocurrency.ETH)
  })
})
