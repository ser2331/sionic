import React from "react";
import {ReactSVG} from "react-svg";
import map_icon from "../../assets/images/Pin.svg";
import search from "../../assets/images/Frame 1349.svg";
import basket from "../../assets/images/basket.svg";
import ava from "../../assets/images/ava.svg";
import FakeData from "../../fake-data";

import './header.scss';

const {citiesList} = FakeData;

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__logo">
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

            <div className="Header__basket-logo">
                <ReactSVG className="basket-icon" src={basket} />
            </div>

            <div className="Header__user-logo">
                <ReactSVG src={ava} />
            </div>
        </div>
    );
};

export default Header;
