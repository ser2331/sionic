import React from "react";
import ProductCart from "../product-cart";
import FakeData from '../../fake-data';

import './catalog-page.scss';

const {catalogList} = FakeData

const CatalogPage = () => {

    const renderSearchCategory = (list) => {
        const {id, name, color} = list;
        return (
            <button className="category"
                    key={id}
                    style={{
                        background: color,
                        color: color === '#FFF' ? '#000' : '#FFF',
                        border: color === '#FFF' ? '1px solid #FF7CB4' : color,
                    }}
            >
                {name}
            </button>
        )
    }
    return (
        <div className="CatalogPage">
            <div className="CatalogPage__header">
                <div className="name-page">Каталог товаров</div>
                <div className="settings">Настройки</div>
            </div>

            <div className="CatalogPage__category-search">
                {catalogList.map(renderSearchCategory)}
            </div>

            <ProductCart/>
        </div>
    );
};

export default CatalogPage;
