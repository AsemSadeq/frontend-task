import React, { InputHTMLAttributes } from 'react'
import { InputTypeAttribute } from '../../Shared/interfaces'
import styles from './FormElement.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  type: InputTypeAttribute
  label: string
  name: string
  options?: string[]
}

export const Input: React.FC<InputProps>  = ({ label, name, type, options, ...reset }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{label}</label>
      {type !== 'select' ? (
        <input id={name} type={type} {...reset} />
      ) : (
        <select id={name} {...reset}>
          <option value=''></option>
          {!!options && options?.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}
    </div>
  )
}
