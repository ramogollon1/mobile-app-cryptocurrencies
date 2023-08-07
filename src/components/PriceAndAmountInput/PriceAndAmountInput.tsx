import React from 'react'
import Input from '../Input/Input'

interface PriceAndAmountInputProps {
  price: string
  setPrice: (price: string) => void
  amount: string
  setAmount: (amount: string) => void
}

const PriceAndAmountInput: React.FC<PriceAndAmountInputProps> = ({
  price,
  setPrice,
  amount,
  setAmount,
}) => {
  return (
    <>
      <Input placeholder="Price" value={price} setValue={setPrice} />
      <Input placeholder="Amount" value={amount} setValue={setAmount} />
    </>
  )
}

export default PriceAndAmountInput
