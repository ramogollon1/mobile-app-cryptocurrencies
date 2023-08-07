import React, { FC, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { OrderContext } from '../../contexts/OrderContext'
import { COLORS } from '../../constants/colors'

const TopBar: FC = () => {
  const { totalCommission } = useContext(OrderContext)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Total Commission: ${totalCommission.toFixed(2)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.TOP_BAR_BG,
    borderBottomColor: COLORS.TOP_BAR_BORDER,
    borderBottomWidth: 1,
    padding: 15,
  },
  text: {
    color: COLORS.TOP_BAR_TEXT,
    fontSize: 18,
  },
})

export default TopBar
