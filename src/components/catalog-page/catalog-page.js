import React from "react";
import {useSelector} from "react-redux";
import ProductCart from "../product-cart";

import './catalog-page.scss';

const CatalogPage = () => {
    const categoryList = useSelector(state => state.app.categories);

    const renderSearchCategory = (list) => {
        const {id, name} = list;
        const col = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

        return (
            <button className="category"
                    key={id}
                    style={{
                        background: col,
                        color: col === '#FFF' ? '#000' : '#FFF',
                        border: col === '#FFF' ? '1px solid #FF7CB4' : 'none',
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
                {categoryList.map(renderSearchCategory)}
            </div>

            <ProductCart/>
        </div>
    );
};

export default CatalogPage;
