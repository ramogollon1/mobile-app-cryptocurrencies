import React, { FC } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { OperationType } from '../../models/Order'
import { COLORS } from '../../constants/colors'

interface OperationTypePickerProps {
  operationType: OperationType
  setOperationType: (operationType: OperationType) => void
}

const operationTypes: OperationType[] = [OperationType.BUY, OperationType.SELL]

export const OperationTypePicker: FC<OperationTypePickerProps> = ({
  operationType,
  setOperationType,
}) => (
  <View style={styles.container}>
    {operationTypes.map((opType: OperationType) => (
      <TouchableOpacity
        key={opType}
        style={[
          styles.button,
          operationType === opType && styles.buttonSelected,
        ]}
        onPress={() => setOperationType(opType)}>
        <Text
          style={[
            styles.buttonText,
            operationType === opType && styles.textSelected,
          ]}>
          {opType}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
)

const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.GREY,
    borderRadius: 8,
    borderWidth: 1,
    color: COLORS.WHITE,

    marginHorizontal: 5,
    padding: 12,
  },
  buttonSelected: {
    backgroundColor: COLORS.PRIMARY,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  textSelected: {
    color: COLORS.WHITE,
  },
})
