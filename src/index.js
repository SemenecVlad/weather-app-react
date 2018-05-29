import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import { persistGate, PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { PropagateLoader } from 'react-spinners';


const history = createBrowserHistory();

const persistConfig = {
    key: 'main',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);


let store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
let persistor = persistStore(store)


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<PropagateLoader color={'#ff0000'} size={30} loading={true} />} persistor={persistor}>
            <Router history={history}>
                <App />
            </Router>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
