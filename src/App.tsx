// plugins
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// redux
// components
import DefaultLayout from './layouts/default.layout';
import CareerLayout from './layouts/career.layout';
import Home from './pages/Home/home.page';
import NotFound from './pages/NotFound/not-found.page';
import Products from './pages/Products/products.page';
import Categories from './pages/Categories/categories.page';
import Category from './pages/Category/category.page';
import SingleProduct from './pages/SingleProduct/single-product.page';
import Career from './pages/Career/career.page';
import SingleCareer from './pages/SingleCareer/single-career.page';
// imports
// styles

const App = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to={'/'} />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories:name' element={<Category />} />
      </Route>

      <Route path='/career' element={<CareerLayout />}>
        <Route index element={<Career />} />
        <Route path='/career/:id' element={<SingleCareer />} />
      </Route>

      <Route path='/not-found' element={<NotFound />} />
      <Route path='/*' element={<Navigate to={'/not-found'} />} />
    </Routes>
  );
};

export default App;
