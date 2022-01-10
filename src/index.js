import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./components/app.js";
import store from "./store";

import './assets/styles/index.scss';

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>,
  document.getElementById('root')
);

