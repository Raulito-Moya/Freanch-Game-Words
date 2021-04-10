import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'


import { authReducer } from '../reducers/authReduce';
import { uiReducer } from '../reducers/uiReducer';
import { wordsReducer } from '../reducers/wordsReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({ 
   auth:authReducer,
   ui:uiReducer,
   words: wordsReducer
})


export const store =  createStore(
    reducers,
    composeEnhancers(
       applyMiddleware(thunk)
   )

);
