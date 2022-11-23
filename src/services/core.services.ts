import http from './http-common.services';
import { ProductType } from '../models/products.model';

class ProductApi {
  getAllProducts = () => {
    return http.get<ProductType[]>('/products/');
  };

  getProductPaginated = (offset = 0, limit = 10) => {
    return http.get<ProductType[]>(`/products?offset=${offset}&limit=${limit}`);
  };

  getProductById = (id: number | string) => {
    return http.get<ProductType>(`/products/${id}`);
  };
}

export default new ProductApi();
