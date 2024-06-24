import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducerSetting } from "./setting/SettingSlice";
import { persistReducer, persistStore } from "redux-persist";
import { reducerAuth } from "./auth/AuthSlice";


const persistConfig = {
  storage : AsyncStorage , 
  key : "root"
}

const rootReducer = combineReducers({
  reducerSetting,
  reducerAuth
});


export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);



 