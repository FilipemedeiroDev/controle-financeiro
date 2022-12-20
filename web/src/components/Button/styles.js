import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;

  background-color: var(--primary-color);
  color: #ffff;
  font-weight: 600;
  font-size: 16px;

  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;