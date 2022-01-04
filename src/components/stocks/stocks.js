import React from "react";
import {ReactSVG} from "react-svg";
import stock_frame from "../../assets/images/stocks.svg";

import "./stocks.scss";

const Stocks = () => {
    return(
        <div className="Stocks">
            <div className="Stocks__free-stock">
                <div className="stock-frame">
                    <ReactSVG src={stock_frame} />
                </div>
                <div className="stock-content">
                    <div className="label">
                        Получай товары бесплатно!
                    </div>
                    <button className="learn-more">
                        Узнать подробнее
                    </button>
                </div>
            </div>

            <div className="Stocks__new-collection">
                <div className="name-stock">Новая <br /> коллекция</div>
            </div>

            <div className="Stocks__new-collection">
                <div className="name-stock">Новая <br /> коллекция</div>
            </div>

            <div className="Stocks__new-collection">
                <div className="name-stock">Новая <br /> коллекция</div>
            </div>

        </div>
    );
};

export default Stocks;