import { Link } from 'react-router-dom';
import { ReactComponent as SvgLogo } from '../../assets/logo.svg';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  padding: 0 2rem;
  z-index: 5;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 12px;
`;

export const Logo = styled(SvgLogo)`
  width: 1.5rem;
  padding: 6px 6px 6px 0;
`;

export const Brand = styled.span`
  font-size: 1.5rem;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const OutletContainer = styled.div`
  height: 100%;
  padding-top: 2.5rem;
`;
