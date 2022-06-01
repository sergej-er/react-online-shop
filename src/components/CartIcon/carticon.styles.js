import styled from 'styled-components';
import { ReactComponent as CartSvg } from '../../assets/cart-icon.svg';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 4;
  opacity: 0.4;
  cursor: pointer;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled(CartSvg)`
  width: 2rem;
`;

export const ItemCount = styled.span`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  position: absolute;
  font-size: 12px;
  font-weight: 600;
  top: -2px;
  right: -2px;
`;
