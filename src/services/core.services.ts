import http from './http-common.services';
import { ProductType } from '../models/products.model';

export const getAllProducts = () => {
  return http.get<ProductType[]>('/products/');
};

export const getProductPaginated = (offset: number = 0, limit: number = 10) => {
  return http.get<ProductType[]>(`/products?offset=${offset}&limit=${limit}`);
};

export const getProductById = (id: number | string) => {
  return http.get<ProductType>(`/products/${id}`);
};
