import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  userReducer from './user/userSlice';
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//userReducer is new name to reducer as we exported reducer as default,so we can change name

const rootReducer = combineReducers({user:userReducer});

const persistConfig = {
  key:'root',
  storage,
  version:1,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer:persistedReducer,

  middleware:(getDefaultmiddleware) =>getDefaultmiddleware({
    serializableCheck:false, 

    }),
});

export const persistor = persistStore(store);
