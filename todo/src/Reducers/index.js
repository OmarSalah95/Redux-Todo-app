import { combineReducers } from 'redux';
import{ todoReducer }from './TodoReducer';


export const MainReducer = combineReducers({
    todoReducer,
});

