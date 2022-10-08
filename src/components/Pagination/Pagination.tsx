import React, { useContext } from 'react'
import  PaginationMUI  from '@mui/material/Pagination'
import { AppContext } from '../../context'
import { ApiData } from '../../Shared/interfaces'
import { defaultPageSize } from '../../Shared/constants'

interface Props {
  // eslint-disable-next-line no-unused-vars
  onPageChange: (_: any, _val: number) => void
  currentPage: number
}

export const Pagination: React.FC<Props> = ({ onPageChange, currentPage }) => {
  const { result: { auditLog }} =  useContext(AppContext) as ApiData

  return (
    <PaginationMUI
      page={currentPage}
      onChange={onPageChange}
      count={auditLog.length / defaultPageSize}
    />
  )
}