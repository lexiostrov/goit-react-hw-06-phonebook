import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './AddContactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedContReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
