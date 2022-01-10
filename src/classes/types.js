export default class Types {
    static routing = [
        { id: 0, key: 'home', path: '/' },
        { id: 1, key: 'basket', path: '/basket' },
        { id: 2, key: 'delivery', path: '/delivery' },
        { id: 3, key: 'ordersHistory', path: '/orders-history' },
    ];

    static routingMap = Types.routing.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());

    static appSizes = [
        { id: 0, key: 'mobile', size: 360 },
        { id: 1, key: 'tablet', size: 768 },
        { id: 2, key: 'desktop', size: 1152 },
        { id: 3, key: 'large', size: 1440 },
    ];

    static appSizesMap = Types.appSizes.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());

}
