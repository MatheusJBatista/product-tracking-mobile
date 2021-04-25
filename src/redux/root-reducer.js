import { combineReducers } from 'redux'

import click from './click/click-reducer'
import error from './error/error-reducer'
import requesting from './requesting/requesting-reducer'

const RootReducer = () => {
  const reducerMap = {
    click,
    error,
    requesting,
  }

  return combineReducers(reducerMap)
}

export default RootReducer
