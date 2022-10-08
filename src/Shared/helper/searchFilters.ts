import { ParsedUrlQuery } from 'querystring'
import { ApiData, AuditLog } from '../interfaces'

export const filteredData = async (query: ParsedUrlQuery): Promise<AuditLog[] | null> => {
  if (!Object.keys(query).length) return null

  const res = await fetch(process.env.API_URL as string)
  const { result: { auditLog }}: ApiData = await res.json()

  const filteredData =  auditLog.filter(({ applicationId, applicationType, actionType, creationTimestamp }) => {
    return (query['applicationId'] && `${applicationId}` === query['applicationId'])
      || (query['applicationType'] && `${applicationType}` === query['applicationType'])
      || (query['actionType'] && `${actionType}` === query['actionType'])
      || ((query['toDate'] && (new Date(query['toDate'] as string) >=  new Date(creationTimestamp)) ||
        (query['fromDate'] && (new Date(query['fromDate'] as string) <= new Date(creationTimestamp)))
      ))
  })

  return filteredData
}