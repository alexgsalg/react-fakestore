import http from './http-common.services';
import { CategoryType } from '../models/categories.model';

class CategoriesApi {
  getAllCategories = () => {
    return http.get<CategoryType[]>('/categories/');
  };

  getCategoriesPaginated = (offset = 0, limit = 10) => {
    return http.get<CategoryType[]>(`/categories?offset=${offset}&limit=${limit}`);
  };

  getCategoriesById = (id: number | string) => {
    return http.get<CategoryType>(`/categories/${id}`);
  };
}

export default new CategoriesApi();
