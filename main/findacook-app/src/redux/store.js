import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import cartReducer from './reducers/cartReducers';

const initialState = {}

const middleware = [thunk]

const store = configureStore({
    reducer: cartReducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV !== 'production' && composeWithDevTools,
});

export default store;