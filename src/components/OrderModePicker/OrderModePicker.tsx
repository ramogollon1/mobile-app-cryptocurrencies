import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { OrderMode } from '../../models/Order'
import { ViewStyle } from 'react-native'

interface OrderModePickerProps {
  orderType: OrderMode
  setOrderType: (orderType: OrderMode) => void
  style?: ViewStyle
}

const orderModes: OrderMode[] = [OrderMode.LIMIT, OrderMode.MARKET]

export const OrderModePicker: React.FC<OrderModePickerProps> = ({
  orderType,
  setOrderType,
  style,
}) => (
  <Picker
    style={style}
    selectedValue={orderType}
    onValueChange={itemValue => setOrderType(itemValue)}>
    {orderModes.map(mode => (
      <Picker.Item key={mode} label={mode} value={mode} testID={mode} />
    ))}
  </Picker>
)
