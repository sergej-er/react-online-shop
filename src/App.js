import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/shop/Shop';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
