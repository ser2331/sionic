import React from "react";
import { Route, Switch } from 'react-router-dom';
import CatalogPage from "../catalog-page";
import BasketPage from "../basket-page";

import './app-content.scss';

const AppContent = () => {
    return (
        <div className="AppContent">
            <Switch>
                <Route path='/' component={CatalogPage} exact/>
                <Route path='/basket' component={BasketPage} />
            </Switch>
        </div>
    );
};

export default AppContent;