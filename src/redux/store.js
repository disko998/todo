import { createStore, compose, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { todoReducer } from './todos.reducer'

const rootReducer = combineReducers({ todos: todoReducer })

const persistConfig = {
    key: 'todos',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
      })
    : compose

export const store = createStore(persistedReducer, composeEnhancers())

export const persistor = persistStore(store)
