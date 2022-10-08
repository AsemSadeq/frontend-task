import React, { ChangeEvent, useContext, useState } from 'react'
import Router, { useRouter } from 'next/router'
import { AppContext } from '../../context'
import { searchFilters } from '../../Shared/constants'
import { ApiData, SearchFiltersIR } from '../../Shared/interfaces'
import { Input } from '../FormElement'
import styles from './SearchFilter.module.css'

export const SearchFilter: React.FC  = () => {
  const { query } = useRouter()
  const [filters, setFilters] = useState<SearchFiltersIR>(query)
  const { result: { auditLog } } = useContext(AppContext) as ApiData
  const actionTypes = [...new Set(auditLog.map(({ actionType }) => actionType))]
  const applicationTypes = [...new Set(auditLog.filter(({ applicationType }) => applicationType).map(({ applicationType }) => applicationType))] as string[]


  const handleSearchFilter = () => {
    if (Object.keys(filters).length) {
      Router.replace({
        query: {
          ...filters
        }
      })
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((preState) => ({
      ...preState,
      ...(e.target.value && { [e.target.id]: e.target.value })
    }))
  }

  return (
    <div className={styles.searchFilterWrapper}>
      {searchFilters.map(({ label, type, placeholder, id }, index) => (
        <Input key={`${label}-${index}`} {...{
          label,
          defaultValue: query[`${id}`] as string ?? '',
          onChange: handleInputChange,
          name: id,
          type,
          ...(placeholder && { placeholder }),
          ...(label === 'action type' && { options: actionTypes }),
          ...(label === 'application type' && { options: applicationTypes })
        }} />
      ))}
      <button className={styles.searchBtn} onClick={handleSearchFilter}>Search Logger</button>
    </div>
  )
}
