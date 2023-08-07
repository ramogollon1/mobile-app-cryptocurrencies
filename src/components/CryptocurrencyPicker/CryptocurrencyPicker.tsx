import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { Cryptocurrency } from '../../models/Order'
import { ViewStyle } from 'react-native'

interface CryptocurrencyPickerProps {
  cryptocurrency: Cryptocurrency
  setCryptocurrency: (cryptocurrency: Cryptocurrency) => void
  style?: ViewStyle
}

const cryptocurrencies: Cryptocurrency[] = [
  Cryptocurrency.BTC,
  Cryptocurrency.ETH,
  Cryptocurrency.USDC,
]

export const CryptocurrencyPicker: React.FC<CryptocurrencyPickerProps> = ({
  cryptocurrency,
  setCryptocurrency,
  style,
}) => (
  <Picker
    style={style}
    testID="cryptocurrencyPicker"
    selectedValue={cryptocurrency}
    onValueChange={itemValue => setCryptocurrency(itemValue)}>
    {cryptocurrencies.map(crypto => (
      <Picker.Item key={crypto} label={crypto} value={crypto} />
    ))}
  </Picker>
)
