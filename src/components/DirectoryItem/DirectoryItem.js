import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DirectoryBgImage,
  DirectoryBodyContainer,
  DirectoryItemContainer,
} from './directory-item.styles.js';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const navigationHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={navigationHandler}>
      <DirectoryBgImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
