import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Col, Row} from 'antd';
import {app as appActions} from "../../store/actions"

import './product-cart.scss';

const ProductCart = () => {
    const productsList = useSelector(state => state.app.products);
    const imagesList = useSelector(state => state.app.images);
    console.log(productsList);
    console.log(imagesList);

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
        dispatch(appActions.setProduct(list));
    };

    const renderProduct = (list) => {
        const {id, description, category_id, name, newPrice, oldPrice} = list;
        const imagesArr = imagesList.filter((item) => item.product_id === id);
        const imagesLink = imagesArr.length ? imagesArr[0].image_url : '/img/products/601a73165650d.jpg';
        return (
            <Col span={6} className="ProductCart__wrapper" key={id}>

                <div className="image">
                    <img src={`https://test2.sionic.ru${imagesLink}`} alt={'#'}/>
                </div>

                <div className="name">
                    {name}
                </div>

                <div className="price">
                    <div className="new-price">
                        {`от ${newPrice ? newPrice.toLocaleString() : ''} ₽`}
                    </div>

                    <div className="stock-price">
                        <div className="old-price">
                            {`${oldPrice ? oldPrice.toLocaleString() : ''} ₽`}
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
            {productsList.map(renderProduct)}
        </Row>
    );
};

export default ProductCart;