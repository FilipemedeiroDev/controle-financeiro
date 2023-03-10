import MaskedInput from "react-text-mask";
import styled from "styled-components";

export const ContentForm = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  margin: 20px;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  padding: 1rem 0.4rem;
  
  gap: 10px;

  position: relative;

  @media (max-width: 750px) {
    flex-direction: column
  }

  @media (max-width: 280px) {
    gap: 6px;
  }

`;

export const ContentIcon = styled.div`
  position: absolute;
  top: 4px;
  right: 12px;
  cursor: pointer;
  display: none;

  @media (max-width: 750px) {
    display: flex;
  }
`;

export const ContentInput = styled.div`
  display:  ${(props) => (props.showFormTransaction === true ?  'flex': 'none')};
  flex-direction: column;
  width: ${(props) => (props.width ? props.width + '%': '100%')};

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (min-width: 760px) {
    display: flex;
  }
`;

export const Label = styled.label`
  font-weight: 600;

  @media (max-width: 750px) {
    font-size: 14px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
  }
`;

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 4px;
  width: ${(props) => (props.width ? props.width + '%': '100%')};
  
`;

export const Money = styled(MaskedInput)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 4px;
`;

export const Date = styled(MaskedInput)`
  
`;

export const ContentSelect = styled.div`
  display: ${(props) => (props.showFormTransaction === true ?  'flex': 'none')};
  flex-direction: column;
  width: ${(props) => (props.width ? props.width + '%': '100%')};

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (min-width: 760px) {
    display: flex;
  }
`;

export const Select = styled.select`
  height: 30px;
  border-radius: 4px;
`;

export const Option = styled.option``;

export const Button = styled.button`
  display: ${(props) => (props.showFormTransaction === true ?  'block': 'none')};
  width: ${(props) => (props.width ? props.width + '%': '100%')};
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

  @media (max-width: 750px) {
    font-size: 12px;
    width: 100%;
  }

  @media (max-width: 280px) {
    font-size: 10px;
    padding: 2px;
  }

  @media (min-width: 760px) {
    display: block;
  }
`;
