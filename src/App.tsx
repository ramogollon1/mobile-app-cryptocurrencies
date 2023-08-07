import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import BuySellForm from './screens/BuySellForm'
import OrderBook from './screens/OrderBook'
import TopBar from './components/TopBar/TopBar'
import { OrderProvider } from './contexts/OrderContext'
import BinanceService from './services/BinanceService'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OrderProvider>
        <TopBar />
        <BuySellForm exchangeService={BinanceService} />
        <OrderBook />
      </OrderProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
