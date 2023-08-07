import { calculateAndAddCommission } from './calculateFee'
import {
  OperationType,
  Cryptocurrency,
  OrderMode,
  ExtendedOrder,
} from '../models/Order'
import { USER_COMMISION_FEE } from '../constants/commisions'

describe('calculateAndAddCommission', () => {
  it('calculates the correct total and commission', () => {
    const order: ExtendedOrder = {
      id: 1,
      operationType: OperationType.BUY,
      cryptocurrency: Cryptocurrency.BTC,
      price: 10000,
      amount: 1,
      isExecuted: false,
      total: 100,
      commission: 1,
      orderType: OrderMode.MARKET,
    }

    const result = calculateAndAddCommission(order)

    expect(result.total).toEqual(10000)
    expect(result.commission).toEqual(10000 * USER_COMMISION_FEE)
    expect(result.isExecuted).toBe(true)
  })
})
