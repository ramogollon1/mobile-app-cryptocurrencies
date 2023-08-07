import axios, { AxiosError } from 'axios'
import { ExchangeService } from '../models/ExchangeService'
import { CurrencyRate } from '../models/Order'

const BINANCE_API_BASE_URL = 'https://api.binance.com/api/v3'

class BinanceService implements ExchangeService {
  async getCurrencyRates(): Promise<CurrencyRate[]> {
    try {
      const response = await axios.get<CurrencyRate[]>(
        `${BINANCE_API_BASE_URL}/ticker/price`,
      )
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      console.error('Error fetching currency rates:', axiosError.message)
      return []
    }
  }
}

export default new BinanceService()
