import { combineReducers } from 'redux';
import userReducer from './userReducer';
import currentPageReducer from './currentPageReducer';
import todoReducer from './todoReducer';

const reducers = combineReducers({
    user: userReducer,
    currentPage: currentPageReducer,
    todo: todoReducer,
})

export default reducers;