import { InputTypeAttribute } from '../interfaces'

interface SearchFilter {
    id: string
    label: string
    type: InputTypeAttribute
    placeholder?: string
}

export const searchFilters: SearchFilter[] = [
  {
    id: 'actionType',
    label: 'action type',
    type: 'select'
  },
  {
    id: 'applicationType',
    label: 'application type',
    type: 'select'
  },
  {
    id: 'fromDate',
    label: 'from date',
    type: 'date'
  },
  {
    id: 'toDate',
    label: 'to date',
    type: 'date'
  },
  {
    id: 'applicationId',
    label: 'application id',
    type: 'text',
    placeholder: 'e.g 21344534',
  }
]

export const defaultPage = 1

export const defaultPageSize = 10

export const auditLogHeaderElements: string[] = ['log id', 'application type', 'application id' , 'action', 'action details', 'date: time']
