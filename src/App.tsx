// plugins
import { Route, Routes, Navigate } from 'react-router-dom';
// context
// components
import DefaultLayout from './layouts/default.layout';
import Home from './pages/Home/home.page';
import NotFound from './pages/NotFound/not-found.page';
import Collections from './pages/Collections/collections.page';
import MenSection from './pages/Men-section/men-section.page';
import WomenSection from './pages/Women-section/women-section.page';
import SingleProduct from './pages/SingleProduct/single-product.page';
// imports
// images
// styles

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/men' element={<MenSection />} />
        <Route path='/women' element={<WomenSection />} />
        <Route path='/product/:id' element={<SingleProduct />} />

        <Route path='/not-found' element={<NotFound />} />
        <Route path='/*' element={<Navigate to={'/not-found'} />} />
      </Route>
    </Routes>
  );
};

export default App;
