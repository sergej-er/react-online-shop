import React, { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen, setOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
          <h3 className='brand'>Fashionovo</h3>
        </Link>
        <nav className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/signin'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </nav>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
