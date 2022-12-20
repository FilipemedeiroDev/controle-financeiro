import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  width: 20%;
  padding: 1rem;

  background-color: white;
  border-radius: 8px;

  position: relative;

  @media (max-width: 750px) {
    width: 30%;
  }
`;

export const HeaderCard = styled.div`
   display: flex;
   justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;

  @media (max-width: 750px) {
      font-size: 100%;
  }
`;

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;

  svg {
    font-size: 28px;
  }

  @media (max-width: 750px) {
    margin: 0;

    svg {
      display: none;
    }
  }
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 28px;
  text-align: center;

  margin-top: 10px;

  @media (max-width: 750px) {
      font-size: 100%;
  }
`;