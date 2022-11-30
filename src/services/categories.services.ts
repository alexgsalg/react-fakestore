import http from './http-common.services';
import { CategoryType } from '../models/categories.model';
import { useQuery } from 'react-query';

class CategoriesApi {
  getAllCategories = () => {
    return useQuery(['categories'], async () => await http.get<CategoryType[]>('/categories/'));
  };

  getCategoriesPaginated = (queryId: string, offset = 0, limit = 10) => {
    return useQuery(
      [queryId],
      async () => await http.get<CategoryType[]>(`/categories?offset=${offset}&limit=${limit}`),
    );
    return http.get<CategoryType[]>(`/categories?offset=${offset}&limit=${limit}`);
  };

  getCategoriesById = (id: number | string) => {
    return http.get<CategoryType>(`/categories/${id}`);
  };
}

export default new CategoriesApi();
