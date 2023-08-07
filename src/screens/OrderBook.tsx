import React, { FC, useContext, useMemo } from 'react'
import { View, Text, FlatList, ListRenderItem, StyleSheet } from 'react-native'
import { OrderContext } from '../contexts/OrderContext'
import { OperationType, Order } from '../models/Order'
import { COLORS } from '../constants/colors'

const OrderBook: FC = () => {
  const { orders } = useContext(OrderContext)

  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => a.price * a.amount - b.price * b.amount)
  }, [orders])

  const renderOrder: ListRenderItem<Order> = ({ item }) => {
    const totalPrice = item.price * item.amount
    const backgroundColor =
      item.operationType === OperationType.BUY ? COLORS.BUY : COLORS.SELL

    return (
      <View style={[styles.orderContainer, { backgroundColor }]}>
        <Text>Cryptocurrency: {item.cryptocurrency}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Amount: {item.amount}</Text>
        <Text>Total Price: {totalPrice.toFixed(2)}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Book</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={sortedOrders}
        renderItem={renderOrder}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
  orderContainer: {
    borderRadius: 5,
    marginBottom: 12,
    marginHorizontal: 12,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
  },
})

export default OrderBook
