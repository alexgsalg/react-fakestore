import http from './http-common.services';
import { ProductType } from '../models/products.model';
import { useQuery } from 'react-query';

class ProductApi {
  getAllProducts = () => {
    return useQuery(['products'], async () => await http.get<ProductType[]>('/products/'));
  };

  getProductPaginated = (queryId: string, page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    console.count('product query');
    return useQuery(
      [queryId, page],
      async () => await http.get<ProductType[]>(`/products?offset=${offset}&limit=${limit}`),
    );
  };

  getProductById = (id: number | string) => {
    return useQuery(['product'], async () => await http.get<ProductType>(`/products/${id}`));
  };
}

export default new ProductApi();
