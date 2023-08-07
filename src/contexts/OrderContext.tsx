import React, { FC, createContext, useState, ReactNode, useMemo } from 'react'
import { Order, OrderContextData, OrderMode } from '../models/Order'
import { calculateAndAddCommission } from '../utils/calculateFee'

const OrderContext = createContext<OrderContextData>({
  orders: [],
  addOrder: () => {},
  executeOrder: () => {},
  totalCommission: 0,
})

interface OrderProviderProps {
  children: ReactNode
}

const OrderProvider: FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([])
  const [totalCommission, setTotalCommission] = useState<number>(0)

  const addOrder = (order: Order): void => {
    let newOrder: Order
    if (order.orderType === OrderMode.MARKET) {
      newOrder = calculateAndAddCommission(order)
    } else {
      newOrder = { ...order, isExecuted: false }
    }
    setOrders(prevOrders => [...prevOrders, newOrder])
    setTotalCommission(
      prevCommission => prevCommission + (newOrder.commission ?? 0),
    )
  }

  const executeOrder = (orderId: number): void => {
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        if (order.id === orderId) {
          const newOrder = calculateAndAddCommission(order)
          setTotalCommission(
            prevCommission => prevCommission + (newOrder.commission || 0),
          )
          return newOrder
        } else {
          return order
        }
      })
    })
  }

  const value = useMemo(
    () => ({ orders, addOrder, executeOrder, totalCommission }),
    [orders, totalCommission],
  )

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export { OrderContext, OrderProvider }
