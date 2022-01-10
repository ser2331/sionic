import React from 'react';
import {useDispatch} from "react-redux";
import {Col, Row} from 'antd';
import {app as appActions} from "../../store/actions"
import FakeData from '../../fake-data';

import './product-cart.scss';

const {productPropertiesList} = FakeData

const ProductCart = () => {
    const dispatch = useDispatch();
    // const getSpan = () => {
    //     switch (appSize) {
    //         case 'mobile':
    //             return 24;
    //
    //         case 'tablet':
    //             return 8;
    //
    //         case 'desktop':
    //             return 6;
    //
    //         case 'large':
    //             return 6;
    //
    //         default:
    //             return 8;
    //     }
    // };

    const addProductOnBasket = (list) => {
        dispatch(appActions.setProduct(list))
    };

    const renderProduct = (list) => {
        const {id, image, productName, oldPrice, newPrice, searchAttributes} = list;
        return (
            <Col span={6} className="ProductCart__wrapper" key={id}>

                <div className="image">
                    <img src={image} alt={productName}/>
                </div>

                <div className="name">
                    {productName}
                </div>

                <div className="price">
                    <div className="new-price">
                        {`от ${newPrice.toLocaleString()} ₽`}
                    </div>

                    <div className="stock-price">
                        <div className="old-price">
                            {`${oldPrice.toLocaleString()} ₽`}
                        </div>
                        <div className="discount">
                            -10%
                        </div>
                    </div>
                </div>

                <button className="add-product-btn" onClick={() => addProductOnBasket(list)}>
                    Добавить в карзину
                </button>
            </Col>
        );
    };

    return (
        <Row gutter={[20, 24]} className="ProductCart">
            {productPropertiesList.map(renderProduct)}
        </Row>
    );
};

export default ProductCart;