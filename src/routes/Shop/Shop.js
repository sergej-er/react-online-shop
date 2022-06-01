import React from 'react';

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import { Route, Routes } from 'react-router-dom';
import Category from '../Category/Category';
import { ShopContainer } from './shop.styles';

const Shop = () => {
  return (
    <ShopContainer>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </ShopContainer>
  );
};

export default Shop;
