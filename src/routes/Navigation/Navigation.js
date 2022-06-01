import React, { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { CartContext } from '../../contexts/cart.context';
import {
  Brand,
  LoginContainer,
  Logo,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  OutletContainer,
} from './navigation.styles';
import { Outlet, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const logOutHandler = async () => {
    await signOutUser();
    navigate('/signin');
  };

  return (
    <Fragment>
      <NavigationContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/about'>About</NavLink>
        </NavLinksContainer>
        <NavLink to='/'>
          <Logo />
          <Brand>fashionovo</Brand>
        </NavLink>
        <LoginContainer>
          {currentUser ? (
            <NavLink as='span' onClick={logOutHandler}>
              Logout
            </NavLink>
          ) : (
            <NavLink to='/signin'>Login</NavLink>
          )}
          <CartIcon />
        </LoginContainer>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Fragment>
  );
};

export default Navigation;
