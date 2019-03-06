import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import{ MainReducer }from './Reducers/index';

import './index.css';
import App from './App';

export const store = createStore(MainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>, 
document.getElementById('root'));


