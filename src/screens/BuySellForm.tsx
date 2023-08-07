import React, { FC, useState, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import { createNewOrder, handleLimitOrder } from '../utils/order'
import { OrderContext } from '../contexts/OrderContext'
import {
  Cryptocurrency,
  OperationType,
  OrderMode,
  CurrencyRate,
  FiatCurrency,
} from '../models/Order'
import PriceAndAmountInput from '../components/PriceAndAmountInput/PriceAndAmountInput'
import { OperationTypePicker } from '../components/OperationTypePicker/OperationTypePicker'
import { CryptocurrencyPicker } from '../components/CryptocurrencyPicker/CryptocurrencyPicker'
import { OrderModePicker } from '../components/OrderModePicker/OrderModePicker'
import { ExchangeService } from '../models/ExchangeService'
import { COLORS } from '../constants/colors'

interface BuySellFormProps {
  exchangeService: ExchangeService
}

const BuySellForm: FC<BuySellFormProps> = ({ exchangeService }) => {
  const { addOrder, executeOrder } = useContext(OrderContext)
  const [operationType, setOperationType] = useState<OperationType>(
    OperationType.BUY,
  )
  const [cryptocurrency, setCryptocurrency] = useState<Cryptocurrency>(
    Cryptocurrency.BTC,
  )
  const [price, setPrice] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [orderType, setOrderType] = useState<OrderMode>(OrderMode.LIMIT)

  const isFilledInputs = Boolean(amount) && Boolean(price)

  const handleSubmit = async () => {
    Keyboard.dismiss()
    const rates = await exchangeService.getCurrencyRates()
    const cryptoRate = rates.find(
      (rate: CurrencyRate) =>
        rate.symbol === `${cryptocurrency}${FiatCurrency.USDT}`,
    )
    if (!cryptoRate) {
      console.error('No exchange rate found for the selected cryptocurrency')
      return
    }

    const newOrder = createNewOrder(
      operationType,
      cryptocurrency,
      price,
      amount,
      orderType,
      cryptoRate,
    )

    addOrder(newOrder)

    if (orderType === OrderMode.LIMIT) {
      handleLimitOrder(newOrder.id, executeOrder)
    }
  }

  return (
    <View style={styles.container}>
      <OperationTypePicker
        operationType={operationType}
        setOperationType={setOperationType}
      />
      <View style={styles.pickerContainer}>
        <CryptocurrencyPicker
          style={styles.picker}
          cryptocurrency={cryptocurrency}
          setCryptocurrency={setCryptocurrency}
        />
        <OrderModePicker
          style={styles.picker}
          orderType={orderType}
          setOrderType={setOrderType}
        />
      </View>
      <PriceAndAmountInput
        price={price}
        setPrice={setPrice}
        amount={amount}
        setAmount={setAmount}
      />
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isFilledInputs ? COLORS.PRIMARY : COLORS.GREY },
        ]}
        onPress={handleSubmit}
        disabled={!isFilledInputs}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  container: {
    padding: 12,
  },
  picker: {
    flex: 0.5,
  },
  pickerContainer: {
    flexDirection: 'row',
  },
})

export default BuySellForm
