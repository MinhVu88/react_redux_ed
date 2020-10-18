import Counter from './Counter';
import LogIn from './LogIn';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    Counter,
    LogIn
});

export default reducers;