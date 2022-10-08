import { createContext } from  'react'
import { ApiData } from '../Shared/interfaces'

export const AppContext = createContext<ApiData |  {}>({})
