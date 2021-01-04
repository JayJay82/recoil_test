import {combineReducers, createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import staticReducer from './reducers'
import rootSaga from './sagas'


class bootstrap {
   createStore  = ()  => {
       const sagaMiddleware = createSagaMiddleware()
       const store = createStore(combineReducers(staticReducer),applyMiddleware(sagaMiddleware))
       sagaMiddleware.run(rootSaga)
       return store
   }
} 

const boot = new bootstrap()
export default boot