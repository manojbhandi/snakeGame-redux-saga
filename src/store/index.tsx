import {
    applyMiddleware,
    legacy_createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import gameReducer from './reducers';

//create sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

//connect sagaMiddleware to the store
export const store = legacy_createStore(gameReducer, applyMiddleware(sagaMiddleware));
