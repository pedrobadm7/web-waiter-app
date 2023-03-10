import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 19.8rem;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 121.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 3.2rem;
  }

  h2 {
    color: #fff;
    font-weight: 400;
    font-size: 1.6rem;
    opacity: 0.9;
    margin-top: 0.6rem;
  }
`;
