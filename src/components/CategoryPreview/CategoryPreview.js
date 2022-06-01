import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {
  CategoryLink,
  CategoryPreviewContainer,
  Preview,
  Title,
  TitleContainer,
} from './categorypreview.styles.js';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <CategoryLink to={title}>&gt; Show more</CategoryLink>
      </TitleContainer>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
