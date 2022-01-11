import axios from 'axios';

class ApiService {
    _baseApi = 'https://test2.sionic.ru/api/';
    _allProducts = 'Products';
    _categories = 'Categories';
    _productImages = 'ProductImages';
    _productVariations = 'ProductVariations';
    _productVariationProperties = 'ProductVariationProperties';
    _productVariationPropertyListValues = 'ProductVariationPropertyListValues';
    _productVariationPropertyValues = 'ProductVariationPropertyValues';

    getAllProduct = async () => await axios.get(this._baseApi + this._allProducts,{});

    getAllCategories = async () => await axios.get(this._baseApi + this._categories,{});

    getAllImages = async () => await axios.get(this._baseApi + this._productImages,{});

    getVariations = async () => await axios.get(this._baseApi + this._productVariations,{});

    getProductVariationProperties = async () => await axios.get(this._baseApi + this._productVariationProperties,{});

    getProductVariationPropertyListValues = async () => await axios.get(this._baseApi + this._productVariationPropertyListValues,{});

    getProductVariationPropertyValues = async () => await axios.get(this._baseApi + this._productVariationPropertyValues,{});
}

export default ApiService;
