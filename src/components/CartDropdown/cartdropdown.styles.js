import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 320px;
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 2.5rem;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Total = styled.div`
  margin-top: 0.5rem;
`;
