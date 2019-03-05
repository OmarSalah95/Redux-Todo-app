import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import{ MainReducer }from './Reducers/index';

import './index.css';
import App from './App';

export const store = createStore(MainReducer)

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>, 
document.getElementById('root'));


