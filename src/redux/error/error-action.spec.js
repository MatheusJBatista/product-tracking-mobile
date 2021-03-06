import * as ErrorAction from './error-action'
import uuid from 'uuid/v4'
import * as ActionUtility from '../../utilities/action-utility'

describe('ErrorAction', () => {
  describe('removeById', () => {
    it('should call action with payload', () => {
      const expectedId = uuid()

      const actualResult = ErrorAction.removeById(expectedId)
      const expectedResult = ActionUtility.createAction(ErrorAction.REMOVE, expectedId)

      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe('clearAll', () => {
    it('should call action', () => {
      const actualResult = ErrorAction.clearAll()
      const expectedResult = ActionUtility.createAction(ErrorAction.CLEAR_ALL)

      expect(actualResult).toEqual(expectedResult)
    })
  })
})
