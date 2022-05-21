import React from 'react';
import Directory from './components/Directory/Directory';
import { categories } from './data/categories';

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
