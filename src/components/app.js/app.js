import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {app as appAction} from "../../store/actions"

import Header from "../header";
import Stocks from "../stocks";
import AppContent from "../app-content";
import Footer from "../footer";

import './app.scss';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appAction.getAllProducts());
        dispatch(appAction.getAllCategories());
    }, [dispatch]);

    return (
        <div className="App">
            <div className="App__content-container">
                <div className="work-zone">
                    <Header />
                    <AppContent />
                </div>

                <div className="stocks-zone">
                    <Stocks/>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default App;