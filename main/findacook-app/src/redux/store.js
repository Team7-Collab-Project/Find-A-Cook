import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import cartReducer from './reducers/cartReducers';
import messageReducer from './reducers/messageReducer';
import loadingReducer from './reducers/loadingReducer';
import categoryReducer from './reducers/categoryReducer';


const reducer = combineReducers({
    messages: messageReducer,
    loading: loadingReducer,
    categories: categoryReducer
})

const initialState = {}

const middleware = [thunk]

const store = configureStore({
    reducer: cartReducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV !== 'production' && composeWithDevTools,
});

export default store;