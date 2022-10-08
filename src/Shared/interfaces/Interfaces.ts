import { HTMLInputTypeAttribute } from 'react'

export type InputTypeAttribute = HTMLInputTypeAttribute | 'select'

export interface AuditLog {
  logId: number
  applicationId: number | null
  applicationType: string | null
  companyId: number | null
  actionType: string
  ip: string
  userAgent: String
  userId: number | null
  source: string | null
  ownerId: number | null
  logInfo: string | null
  creationTimestamp: string
}

export interface ApiData {
    success: boolean
    elapsed: number
    result: {
        totalPages: number
        number: number
        recordsTotal: number
        recordsFiltered: number
        auditLog: AuditLog[]
    }
}

export interface SearchFiltersIR {
  applicationId?: string
  applicationType?: string
  actionType?: string
  fromDate?: string,
  toDate?: string
}