import inst from './assets/images/Inst.svg';
import vk from './assets/images/Vk.svg';
import face from './assets/images/Facebook.svg';

export default class FakeData {
    static citiesList = [
        {
            value: 0, label: 'Петропавловск-Камчатский', deliveryTime: 20, rating: '3.6', top: false,
        },
        {
            value: 1, label: 'Москва', deliveryTime: 15, rating: '2.6', top: true,
        },
        {
            value: 2, label: 'Санкт-Петербург', deliveryTime: 49, rating: '3.1', top: true,
        },
        {
            value: 4, label: 'Новосибирск', deliveryTime: 26, rating: '5.0', top: true,
        },
        {
            value: 3, label: 'Екатеринбург', deliveryTime: 22, rating: '1.1', top: false,
        },
        {
            value: 5, label: 'Казань', deliveryTime: 35, rating: '4.2', top: false,
        },
        {
            value: 6, label: 'Нижний Новгород', deliveryTime: 20, rating: '3.6', top: false,
        },
        {
            value: 7, label: 'Челябинск', deliveryTime: 15, rating: '2.6', top: false,
        },
        {
            value: 8, label: 'Самара', deliveryTime: 49, rating: '3.1', top: false,
        },
        {
            value: 9, label: 'Омск', deliveryTime: 26, rating: '5.0', top: false,
        },
        {
            value: 10, label: 'Ростов-на-Дону', deliveryTime: 22, rating: '1.1', top: false,
        },
        {
            value: 11, label: 'Уфа', deliveryTime: 35, rating: '4.2', top: false,
        },
        {
            value: 12, label: 'Красноярск', deliveryTime: 20, rating: '3.6', top: false,
        },
        {
            value: 13, label: 'Воронеж', deliveryTime: 15, rating: '2.6', top: false,
        },
        {
            value: 14, label: 'Пермь', deliveryTime: 49, rating: '3.1', top: false,
        },
        {
            value: 15, label: 'Волгоград', deliveryTime: 26, rating: '5.0', top: false,
        },
        {
            value: 16, label: 'Саратов', deliveryTime: 22, rating: '1.1', top: true,
        },
        {
            value: 17, label: 'Тольятти', deliveryTime: 35, rating: '4.2', top: false,
        },
        {
            value: 18, label: 'Ульяновск', deliveryTime: 20, rating: '3.6', top: false,
        },
        {
            value: 19, label: 'Хабаровск', deliveryTime: 15, rating: '2.6', top: false,
        },
        {
            value: 20, label: 'Владивосток', deliveryTime: 49, rating: '3.1', top: false,
        },
        {
            value: 21, label: 'Томск', deliveryTime: 26, rating: '5.0', top: false,
        },
        {
            value: 22, label: 'Рязань', deliveryTime: 22, rating: '1.1', top: false,
        },
        {
            value: 23, label: 'Астрахань', deliveryTime: 35, rating: '4.2', top: false,
        },
    ];

    static catalogList = [
        {id: 0, name: 'Игрушка', color: '#2967FF'},
        {id: 1, name: 'Мартышка', color: '#58CF18'},
        {id: 2, name: 'Мишка', color: '#FFA601'},
        {id: 3, name: 'Подарок', color: '#FF7CB4'},
        {id: 4, name: 'Подарок колегам', color: '#FFA601'},
        {id: 5, name: 'День Рождения Гриши', color: '#FFF'},
    ]

    static socialsList = [
        {id: 0, img: inst,},
        {id: 1, img: vk,},
        {id: 2, img: face,},
    ]
}
