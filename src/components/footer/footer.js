import React from "react";
import FakeData from '../../fake-data';
import google_play from  '../../assets/images/Google Play.svg';
import app_store from '../../assets/images/App Store.svg';

import './footer.scss';
import {ReactSVG} from "react-svg";

const {socialsList} = FakeData;

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__up-zone">
                <div className="logo">
                    React
                </div>

                <div className="socials">
                    <div className="socials-page">
                        <div className="social-label">
                            Присоединяйтесь к нам
                        </div>
                        <div className="social-logo">
                            {socialsList.map(({id, img}) => (
                                <ReactSVG src={img} key={id} />
                            ))}
                        </div>
                    </div>

                    <div className="socials-app">
                        <div className="social-label">
                           Устанавливайте приложение
                        </div>

                        <div className="app-logo-wrapper">
                            <img className="app-logo" src={google_play} alt="google"/>
                            <img src={app_store} alt="apple"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Footer__foot-zone">
                <div className="docs">
                    © Sionic
                </div>
                <div className="docs">
                    Правовая информация
                </div>
                <div className="docs">
                    Политика конфиденциальности
                </div>

            </div>
        </div>
    );
};

export default Footer;