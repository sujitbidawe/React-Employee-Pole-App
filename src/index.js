import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, middleware);

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
