import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, composeEnhancers())}>
      <App />
    </Provider>
  </React.StrictMode>
);
