import React, { FC } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { isValidNumber } from '../../utils/numbers'
import { COLORS } from '../../constants/colors'

interface InputProps {
  placeholder: string
  value: string
  setValue: (value: string) => void
}

const Input: FC<InputProps> = ({ placeholder, value, setValue }) => {
  const handleTextChange = (text: string) => {
    if (!isValidNumber(text)) return
    setValue(text)
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={handleTextChange}
      keyboardType="numeric"
      placeholderTextColor={COLORS.LIGHT_GREY}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.GREY,
    borderRadius: 8,
    borderWidth: 1,
    color: COLORS.BLACK,
    marginVertical: 10,
    padding: 10,
  },
})

export default Input
