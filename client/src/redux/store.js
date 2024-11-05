import { configureStore } from '@reduxjs/toolkit'
import  userReducer from './user/userSlice';
//userReducer is new name to reducer as we exported reducer as default,so we can change name
export const store = configureStore({
  reducer: {user:userReducer},

  middleware:(getDefaultmiddleware) =>getDefaultmiddleware({
    serializableCheck:false, 

    }),
});

