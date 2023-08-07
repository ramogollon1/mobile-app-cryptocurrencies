import { LIMIT_TIME_ORDER } from '../constants/time'
import {
  CurrencyRate,
  Order,
  OrderMode,
  OperationType,
  Cryptocurrency,
} from '../models/Order'

export const createNewOrder = (
  operationType: OperationType,
  cryptocurrency: Cryptocurrency,
  price: string,
  amount: string,
  orderType: OrderMode,
  cryptoRate?: CurrencyRate,
): Order => {
  return {
    id: Date.now(),
    operationType,
    cryptocurrency,
    price: Number(price) || (cryptoRate ? Number(cryptoRate.price) : 0),
    amount: Number(amount),
    orderType,
    isExecuted: orderType === OrderMode.MARKET,
  }
}

export const handleLimitOrder = (
  orderId: number,
  executeOrder: (id: number) => void,
) => {
  new Promise(resolve => setTimeout(resolve, LIMIT_TIME_ORDER)).then(() =>
    executeOrder(orderId),
  )
}
