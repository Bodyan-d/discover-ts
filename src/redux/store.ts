import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';

const authPersistConfig = {
	key: 'auth',
	storage,
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
	},
	middleware: [thunkMiddleware],
	devTools: process.env.NODE_ENV === 'development',
});

// export const store = configureStore({
// 	reducer: {
// 		auth: authReducer,
// 	},
// 	middleware: [thunkMiddleware],
// });

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
