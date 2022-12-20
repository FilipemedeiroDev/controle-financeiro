import styled from "styled-components";
import BannerSignIn from '../../assets/bg-sign-in.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  

  @media (max-width: 750px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const RigthContent = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(${BannerSignIn});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 750px) {
   display: none;
  }
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 450px;

   gap: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--primary-color);
  font-size: 28px;

  @media (max-width: 750px) {
   font-size: 20px;
  }
`;

export const ContentInput = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-weight: 400;
`;

export const Span = styled.span`
  text-align: center;
`;

export const Link = styled.a`
  margin-left: 4px;
  color: var(--link-color);
`;