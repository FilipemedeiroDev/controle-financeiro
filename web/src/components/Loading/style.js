import styled, { keyframes } from "styled-components";
import { FaSpinner } from 'react-icons/fa';

const RotateAnimation = keyframes` 
 from {
      transform: rotate(0deg);
    }
  to {
      transform: rotate(359deg);
    }
`;

export const Spinner = styled(FaSpinner)`
    width: ${(props) => props.width ? props.width + 'px' : 'none'};
    animation:  2s infinite linear;
    animation:  2s infinite linear; 

    animation-name: ${RotateAnimation}
`;


