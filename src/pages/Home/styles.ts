import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fab1a0;
`;
export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;

export const ColOne = styled.section`
  width: 25%;
  height: 100vh;
  background: #fdcb6e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    width: 50%;
    padding: 5px 10px;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  div + div {
    font-weight: 600;
    h1 {
      text-align: center;
    }
  }
`;

export const MenuPrincipal = styled.div`
  background: #00b894;
  flex: 1;
  width: 100%;
  li {
    width: 100%;
  }
`;
