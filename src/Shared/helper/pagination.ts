import { AuditLog } from '../interfaces'

export const getPaginationData = (data: AuditLog[], page: number = 1) => {
  return data.slice((page - 1) * 10, page * 10)
}