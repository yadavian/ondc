
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlice';
import cartReducer from './slices/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import homeReducer from './slices/homeSlice';

const rootReducer = combineReducers({
    login: loginReducer,
    cart: cartReducer,
    home: homeReducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    timeout: null,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['login','home','cart'], //Things u want to persist
    blacklist: ['user'], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware({ 
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store);