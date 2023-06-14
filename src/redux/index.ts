import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true
})

sagaMiddleware.run(rootSaga)
