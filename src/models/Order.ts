import { ReactNode } from 'react'

export enum OperationType {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum Cryptocurrency {
  BTC = 'BTC',
  ETH = 'ETH',
  USDC = 'USDC',
}

export enum FiatCurrency {
  USD = 'USD',
  USDT = 'USDT',
}
export enum OrderMode {
  LIMIT = 'limit',
  MARKET = 'market',
}

export enum OrderStatus {
  EXECUTED = 'Executed',
  PENDING = 'Pending',
}

export interface CurrencyRate {
  symbol: string
  price: string
}

export type Order = {
  id: number
  operationType: OperationType
  cryptocurrency: Cryptocurrency
  price: number
  amount: number
  orderType: OrderMode
  isExecuted: boolean
  commission?: number
  total?: number
}

export type ExtendedOrder = Order & {
  total: number
  commission: number
}

export interface OrderContextData {
  orders: Order[]
  addOrder: (order: Order) => void
  executeOrder: (orderId: number) => void
  totalCommission: number
}

export interface OrderProviderProps {
  children: ReactNode
}
