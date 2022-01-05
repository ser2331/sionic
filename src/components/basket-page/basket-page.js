import React from "react";
import {ReactSVG} from "react-svg";
import RowButton from "../row-button";
import delete_icon from "../../assets/images/delete.svg";
import order from "../../assets/images/order.svg";
import order1 from "../../assets/images/order-1.svg";
import order2 from "../../assets/images/order2.svg";
import product_img from "../../assets/images/basketProductImg.svg";

import "./basket-page.scss";

const BasketPage = () => {

    const renderOrderCap = () => {
        return (
            <div className="order-cap">
                <div className="order-name">xiaomi</div>

                <div className="total-price-wrapper">
                    <div className="price-label">Стомость карзины:</div>
                    <div className="total-price">12312312312</div>
                </div>

                <button onClick={() => {}} className="arrange-btn">
                    Оформить
                </button>

                <div className="logo-wrapper">
                    <ReactSVG src={order1} className="svg1"/>
                    <ReactSVG src={order} className="svg2"/>
                    <ReactSVG src={order2} className="svg3"/>
                </div>
            </div>
        );
    };

    const renderOrder = () => {
        return (
            <div className="Order-cart">
                <div className="Order-cart__basket-product-wrapper">
                    <div className="image">
                        <ReactSVG src={product_img}/>
                    </div>

                    <div className="name-wrapper">
                        <div className="product-name">{'samsung'}</div>

                        <div className="properties">
                            <div className="in-stock">{`${120} шт.`}</div>
                            <div className="date-stock">{`за 21.12.22`}</div>
                            <div className="bought">Куплено:</div>
                            <div className="bought-meaning">150 шт.</div>
                        </div>
                    </div>

                    <div className="quantity-of-goods">
                        <RowButton
                            onClick={() => {}}
                            type="button"
                            name={'-'}
                            color="#AEC2EA"
                        />

                        <div className="quantity">
                            25
                        </div>

                        <RowButton
                            onClick={() => {}}
                            type="button"
                            name={'+'}
                            color="#AEC2EA"
                        />
                    </div>

                    <div className="price">
                        <div className="new-price">
                            от 350 000 ₽
                        </div>
                        <div className="old-price">
                            450 000 ₽
                        </div>
                    </div>

                    <div className="delete-icon">
                        <ReactSVG src={delete_icon} />
                    </div>
                </div>
                <div className="Order-cart__order-line" />
            </div>
        );
    };

    return (
        <div className="BasketPage">
            <div className="BasketPage__header">
                <div className="name-page">Корзина</div>
                <RowButton
                    onClick={() => {}}
                    type="button"
                    name={'Очистить корзину'}
                    color="#FF2D87"
                />
            </div>

            <div className="BasketPage__orders">
                { renderOrderCap() }

                <div className="orders-carts-wrapper">
                    { renderOrder() }
                    { renderOrder() }
                    { renderOrder() }
                    { renderOrder() }
                    { renderOrder() }
                </div>
            </div>
        </div>
    );
};

export default BasketPage;