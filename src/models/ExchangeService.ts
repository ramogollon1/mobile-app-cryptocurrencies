import { CurrencyRate } from './Order'

export interface ExchangeService {
  getCurrencyRates(): Promise<CurrencyRate[]>
}
