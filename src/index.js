import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import combineReducers from './reducers'


const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

const renderApplication = () => {
    render(
        <Provider store={ store }>
             <App />
        </Provider>,
        document.getElementById('root')
    )
};

renderApplication();
