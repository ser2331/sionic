import inst from './assets/images/Inst.svg';
import vk from './assets/images/Vk.svg';
import face from './assets/images/Facebook.svg';
import product_img from './assets/images/productImg.png';

export default class FakeData {
    static citiesList = [
        {
            value: 0, label: 'Петропавловск-Камчатский',
        },
        {
            value: 1, label: 'Москва',
        },
        {
            value: 2, label: 'Санкт-Петербург',
        },
        {
            value: 4, label: 'Новосибирск',
        },
        {
            value: 3, label: 'Екатеринбург',
        },
        {
            value: 5, label: 'Казань',
        },
        {
            value: 6, label: 'Нижний Новгород',
        },
        {
            value: 7, label: 'Челябинск',
        },
        {
            value: 8, label: 'Самара',
        },
        {
            value: 9, label: 'Омск',
        },
        {
            value: 10, label: 'Ростов-на-Дону',
        },
        {
            value: 11, label: 'Уфа',
        },
        {
            value: 12, label: 'Красноярск',
        },
        {
            value: 13, label: 'Воронеж',
        },
        {
            value: 14, label: 'Пермь',
        },
        {
            value: 15, label: 'Волгоград',
        },
        {
            value: 16, label: 'Саратов',
        },
        {
            value: 17, label: 'Тольятти',
        },
        {
            value: 18, label: 'Ульяновск',
        },
        {
            value: 19, label: 'Хабаровск',
        },
        {
            value: 20, label: 'Владивосток',
        },
        {
            value: 21, label: 'Томск',
        },
        {
            value: 22, label: 'Рязань',
        },
        {
            value: 23, label: 'Астрахань',
        },
    ];

    static catalogList = [
        {id: 0, name: 'Игрушка', color: '#2967FF'},
        {id: 1, name: 'Мартышка', color: '#58CF18'},
        {id: 2, name: 'Мишка', color: '#FFA601'},
        {id: 3, name: 'Подарок', color: '#FF7CB4'},
        {id: 4, name: 'Подарок колегам', color: '#FFA601'},
        {id: 5, name: 'День Рождения Гриши', color: '#FFF'},
    ];

    static socialsList = [
        {id: 0, img: inst,},
        {id: 1, img: vk,},
        {id: 2, img: face,},
    ];

    static productPropertiesList = [
        {
            id: 0,
            productName: 'Какоето название товара',
            image: product_img,
            oldPrice: 450000,
            newPrice: 350000,
            searchAttributes: 'Игрушка, Мартышка, Мишка'
        },
        {
            id: 1,
            productName: 'Какоето название товара',
            image: product_img,
            oldPrice: 350000,
            newPrice: 50000,
            searchAttributes: 'Подарок, Мартышка, Мишка'
        },
        {
            id: 2,
            productName: 'Какоето название товара',
            image: product_img,
            oldPrice: 650000,
            newPrice: 250000,
            searchAttributes: 'Игрушка, Подарок колегам, Мишка'
        },
        {
            id: 3,
            productName: 'Какоето название товара очень длинное для проверки как оно будет смотреться',
            image: product_img,
            oldPrice: 950000,
            newPrice: 150000,
            searchAttributes: 'Игрушка, Мартышка, День Рождения Гриши'
        },
        {
            id: 4,
            productName: 'Какоето название товара очень длинное для проверки как оно будет смотреться',
            image: product_img,
            oldPrice: 950000,
            newPrice: 150000,
            searchAttributes: 'Игрушка, Мартышка, День Рождения Гриши'
        },
        {
            id: 5,
            productName: 'Какоето название товара очень длинное для проверки как оно будет смотреться',
            image: product_img,
            oldPrice: 950000,
            newPrice: 150000,
            searchAttributes: 'Игрушка, Мартышка, День Рождения Гриши'
        },
        {
            id: 6,
            productName: 'Какоето название товара очень длинное для проверки как оно будет смотреться',
            image: product_img,
            oldPrice: 950000,
            newPrice: 150000,
            searchAttributes: 'Игрушка, Мартышка, День Рождения Гриши'
        },
        {
            id: 7,
            productName: 'Какоето название товара очень длинное для проверки как оно будет смотреться',
            image: product_img,
            oldPrice: 950000,
            newPrice: 150000,
            searchAttributes: 'Игрушка, Мартышка, День Рождения Гриши'
        },
        {
            id: 8,
            productName: 'Какоето название товара очень длинное для проверки как оно будет смотреться',
            image: product_img,
            oldPrice: 950000,
            newPrice: 150000,
            searchAttributes: 'Игрушка, Мартышка, День Рождения Гриши'
        },
    ]
}
