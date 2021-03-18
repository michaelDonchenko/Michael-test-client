import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(watcherSaga)

export default store
