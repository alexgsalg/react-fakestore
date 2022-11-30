import http from './http-common.services';
import { ProductType } from '../models/products.model';
import { useQuery } from 'react-query';

class ProductApi {
  getAllProducts = () => {
    return useQuery(['products'], async () => await http.get<ProductType[]>('/products/'));
  };

  getProductPaginated = (queryId: string, offset = 0, limit = 10) => {
    return useQuery(
      [queryId],
      async () => await http.get<ProductType[]>(`/products?offset=${offset}&limit=${limit}`),
    );
  };

  getProductById = (id: number | string) => {
    return useQuery(['product'], async () => await http.get<ProductType>(`/products/${id}`));
  };
}

export default new ProductApi();
