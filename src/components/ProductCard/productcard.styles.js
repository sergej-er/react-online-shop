import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 420px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    transition: all 0.2s ease;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 2.5rem;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
      scale: 1.01;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 20%;
`;
