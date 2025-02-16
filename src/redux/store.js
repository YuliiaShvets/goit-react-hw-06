import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contactsSlice.js"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filtersReducer } from "./filtersSlice.js";

  const persistConfig = {
    key: 'counter-persist',
    version: 1,
    storage,
  }
  
  export const store = configureStore({
    reducer: {
        contacts: persistReducer(persistConfig, contactsReducer),
        filters: filtersReducer,
    },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  export const persistor = persistStore(store);