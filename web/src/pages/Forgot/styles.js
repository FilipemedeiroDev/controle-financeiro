import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Text = styled.p`

`;

export const ContentInput = styled.div`
  margin-top: 20px;
`;

export const Label = styled.label``;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
  color: var(--link-color);
`;