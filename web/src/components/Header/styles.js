import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 180px;
  width: 100%;
  background-color: var(--primary-color);

  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 60px;
  color: #ffff;

  @media (max-width: 750px) {
    font-size: 20px;
    margin-top: 90px;
  }
`;

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  position: absolute;
  top: 6%;
  right: 2%;

  svg {
    font-size: 32px;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    gap: 8px;
    
    svg {
      font-size: 24px;
    }

    strong {
      font-size: 12px;
    }
  }
`;

export const Strong = styled.strong`
  color: #ffffff
`;