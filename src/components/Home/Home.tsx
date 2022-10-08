import React, { useState } from 'react'
import { AppContext } from '../../context'
import { defaultPage } from '../../Shared/constants'
import { ApiData } from '../../Shared/interfaces'
import { AuditLogWrapper } from '../AuditLooWrapper'
import { Container } from '../Container'
import { Pagination } from '../Pagination'
import { SearchFilter } from '../SearchFilter'
import styles from './Home.module.css'

export const Home: React.FC<ApiData>  = (props) => {
  const [currentPage, setCurrentPage] = useState(defaultPage)

  const onPageChange = (_e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(() => value)
  }

  return (
    <AppContext.Provider value={props}>
      <Container>
        <div className={styles.homeWrapper}>
          <SearchFilter />
          <AuditLogWrapper currentPage={currentPage}/>
          <Pagination currentPage={currentPage} onPageChange={onPageChange}/>
        </div>
      </Container>
    </AppContext.Provider>
  )
}
