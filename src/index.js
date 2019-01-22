import configureStore from './store';
import  { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import routes from "./routes";
import {syncHistoryWithStore} from 'react-router-redux';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

const store = configureStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);




ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter history={history}>
                {routes}
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root'));

serviceWorker.unregister();
