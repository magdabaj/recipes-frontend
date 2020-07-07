import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from "./utils/history";
import store from "./utils/store";

import App from './containers/App';
import {BrowserRouter} from "react-router-dom";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>, wrapper) : false;