import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 48rem;
  border-radius: 0.8rem;
  padding: 3.2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 2.4rem;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 3.2rem;

    small {
      font-size: 1.4rem;
      opacity: 0.8;
    }

    div {
      margin-top: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 3.2rem;

  > strong {
    font-weight: 500;
    font-size: 1.4rem;
    opacity: 0.8;
  }
`;
