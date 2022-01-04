import React from "react";

import FakeData from '../../fake-data';

import './catalog-page.scss';

const {catalogList} = FakeData

const CatalogPage = () => {
    return (
        <div className="CatalogPage">
            <div className="CatalogPage__header">
                <div className="name-page">Каталог товаров</div>
                <div className="settings">Настройки</div>
            </div>
            <div className="CatalogPage__category-search">
                {catalogList.map(({id, name, color}) => (
                        <button className="category"
                                key={id}
                                style={{
                                    background: color,
                                    color: color === '#FFF' ? '#000' : '#FFF',
                                    border:  color === '#FFF' ? '1px solid #FF7CB4' : color,
                                }}
                        >
                            {name}
                        </button>
                ))}

            </div>

            <div className="CatalogPage__content">

            </div>
        </div>
    );
};

export default CatalogPage;
