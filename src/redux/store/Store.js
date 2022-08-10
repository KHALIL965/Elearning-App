import { persistReducer, persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';


/* Redux persist configs */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
//   blacklist: ['appReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Saga
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, apiMiddleware, createLogger()),
);

export const persistor = persistStore(store);

export default store;