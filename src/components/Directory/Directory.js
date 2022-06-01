import React from 'react';
import { useContext } from 'react';
import DirectoryItem from '../DirectoryItem/DirectoryItem';
import { DirectoryContainer } from './directory.styles';
import { categories } from '../../data/categories';

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
