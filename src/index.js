import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const history = createBrowserHistory();


const store = createStore(
    reducers,
    {},
    compose(
      applyMiddleware(thunk, logger),
      autoRehydrate(),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
persistStore(store, { storage: localStorage, blacklist: []});

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
