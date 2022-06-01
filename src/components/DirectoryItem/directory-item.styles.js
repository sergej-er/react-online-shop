import styled from 'styled-components';

export const DirectoryBgImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const DirectoryBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: auto;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 8px 0px;
  overflow: hidden;
  margin: 8px;

  @media (max-width: 420px) {
    min-width: 100%;
    margin: 8px 0;
  }

  &:hover {
    cursor: pointer;

    & ${DirectoryBgImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${DirectoryBodyContainer} {
      opacity: 0.9;
    }
  }
`;

export const Large = styled.div`
  height: 380px;
`;
