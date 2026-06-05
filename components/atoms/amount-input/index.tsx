import React, { Dispatch, SetStateAction } from 'react'
import styles from './style.module.css'

export interface InputProps {
  placeHolder: string
  setAmount: Dispatch<SetStateAction<number | undefined>>
  input: string
  setInput: Dispatch<SetStateAction<string>>
}

export function AmountInput({ placeHolder, setAmount, input, setInput }: InputProps) {
  const handleChange = (event: {
    target: { name: string; value: string }
  }): void => {
    const raw = event.target.value;
    setAmount(raw === '' ? undefined : parseInt(raw, 10));
    setInput(raw);
  }

  return (
    <input
      name="amount"
      type="number"
      placeholder={placeHolder}
      className={styles.input}
      onChange={handleChange}
      value={input}
      min={0}
      autoComplete="off"
    />
  )
}
