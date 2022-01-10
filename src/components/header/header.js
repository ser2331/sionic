import React from "react";
import {useHistory} from "react-router-dom";
import FakeData from "../../fake-data";
import Types from "../../classes/types";
import {ReactSVG} from "react-svg";
import map_icon from "../../assets/images/Pin.svg";
import search from "../../assets/images/Frame 1349.svg";
import basket from "../../assets/images/basket.svg";
import ava from "../../assets/images/ava.svg";

import './header.scss';

const {citiesList} = FakeData;
const {routingMap} = Types;

const Header = () => {
    const history = useHistory();

    const backToHome = () => {
        history.push(routingMap.get('home').path);
    };
    const goToBasket = () => {
        history.push(routingMap.get('basket').path);
    };

    return (
        <div className="Header">
            <div className="Header__logo" onClick={backToHome}>
                React
            </div>

            <div className="Header__change-city">
                <div className="icon">
                    <ReactSVG src={map_icon} />
                </div>

                <select className="city-name" name="select" >
                    {citiesList.map(({label, value}) => (
                        <option value={value} key={value}> {label}</option>
                    ))}
                </select>

            </div>

            <div className="Header__search-panel">
                <input className="search" placeholder="Поиск бренда, товара, категории..." />
                <button className="search-btn">
                    <ReactSVG className="search-icon" src={search} />
                </button>
            </div>

            <div className="Header__basket-logo" onClick={goToBasket}>
                <ReactSVG className="basket-icon" src={basket} />
            </div>

            <div className="Header__user-logo">
                <ReactSVG src={ava} />
            </div>
        </div>
    );
};

export default Header;
