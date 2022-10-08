import React from 'react'
import styles from './Container.module.css'

interface Props {
  // eslint-disable-next-line no-undef
  children: JSX.Element
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>{ children }</div>
  )
}
