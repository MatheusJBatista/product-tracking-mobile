import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

export default function rootStore(initialState) {
  const store = createStore(rootReducer(), initialState, applyMiddleware(thunk))
  return store
}
