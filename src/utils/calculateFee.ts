import { Order, ExtendedOrder } from '../models/Order'
import { USER_COMMISION_FEE } from '../constants/commisions'

export const calculateAndAddCommission = (order: Order): ExtendedOrder => {
  const total = order.price * order.amount
  const commission = total * USER_COMMISION_FEE

  return {
    ...order,
    total,
    commission,
    isExecuted: true,
  }
}
