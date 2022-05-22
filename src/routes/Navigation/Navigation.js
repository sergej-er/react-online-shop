import React, { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
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
          <Link className='nav-link' to='/signin'>
            Sign In
          </Link>
        </nav>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
