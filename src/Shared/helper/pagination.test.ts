import { data } from '../../mockdata'
import { getPaginationData } from './'

describe('pagination', () => {
  describe('getPaginationData', () => {
    it('get paginated data', () => {
      expect(getPaginationData(data, 1)).toHaveLength(10)
    })
  })
})