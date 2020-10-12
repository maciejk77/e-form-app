import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers';
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));
