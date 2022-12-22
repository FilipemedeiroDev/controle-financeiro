import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.574);
   
    z-index: 999;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 350px;

  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;

  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;

  @media (max-width: 750px) {
    font-size: 100%;
  }
`;

export const ContentInput = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const Label = styled.label``;