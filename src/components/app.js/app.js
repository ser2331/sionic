import React from "react";
import Header from "../header";
import Stocks from "../stocks";
import AppContent from "../app-content";
import Footer from "../footer";

import './app.scss';

const App = () => {
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