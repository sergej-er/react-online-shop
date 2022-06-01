import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';
import About from './routes/About/About';
import { UserContext } from './contexts/user.context';

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        {!currentUser ? (
          <Route path='signin' element={<SignIn />} />
        ) : (
          <Route path='signin' element={<Shop />} />
        )}
        {!currentUser ? (
          <Route path='signup' element={<SignUp />} />
        ) : (
          <Route path='signin' element={<Shop />} />
        )}
        {currentUser ? (
          <Route path='checkout' element={<Checkout />} />
        ) : (
          <Route path='checkout' element={<SignIn />} />
        )}
        <Route path='about' element={<About />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default App;
