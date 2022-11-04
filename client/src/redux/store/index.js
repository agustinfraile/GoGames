import { applyMiddleware, createStore } from 'redux';
import { composeWithDevtools } from 'redux-devtools-extension'
import rootReducer from '../reducer/index'
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevtools(applyMiddleware(thunk)),
);

export default store;