import React from 'react'
import styles from './AuditLogRow.module.css'

interface Props {
  elements: (string | number | null)[]
  isHeader?: boolean
}

export const AuditLogRow: React.FC<Props>  = ({ elements, isHeader }) => {
  return (
    <div className={styles.auditLogRow}>
      {elements.map((content, index) =>
        <div key={content ?? index} className={styles.colLabel}>
          <span>{content ?? '-/-'}</span>
          { isHeader && <button>&uarr;</button>}
        </div>
      )}
    </div>
  )
}
