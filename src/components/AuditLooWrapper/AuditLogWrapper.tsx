import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context'
import { auditLogHeaderElements } from '../../Shared/constants'
import { filteredData, getPaginationData } from '../../Shared/helper'
import { ApiData, AuditLog } from '../../Shared/interfaces'
import { AuditLogRow } from '../AuditLogRow'
import styles from './AuditLogWrapper.module.css'


interface Props {
  currentPage: number
}

export const AuditLogWrapper: React.FC<Props> = ({  currentPage }) => {
  const { result: { auditLog }} = useContext(AppContext) as ApiData
  const [paginatedData, setPaginatedData] = useState<AuditLog[]>([])
  const { query } = useRouter()

  const fetchData = useCallback(async () => {
    const data = await filteredData(query)
    if (data) {
      const paginatedData = getPaginationData(data, currentPage)
      setPaginatedData(paginatedData)
      return
    }
    setPaginatedData(getPaginationData(auditLog, currentPage))
  }, [auditLog, currentPage, query])

  useEffect(() => {
    fetchData()
  }, [query, currentPage, fetchData])

  return (
    <div className={styles.auditWrapper}>
      <AuditLogRow isHeader elements={auditLogHeaderElements} />
      {paginatedData.map(({ logId, applicationType, applicationId, actionType, logInfo, creationTimestamp}) => (
        <AuditLogRow key={logId} elements={[logId, applicationType, applicationId, actionType, logInfo, creationTimestamp]}/>
      ))}
    </div>
  )
}
