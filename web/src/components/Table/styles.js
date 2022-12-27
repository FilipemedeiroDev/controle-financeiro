import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
   text-align: start;
   border-bottom: inset;
   padding-bottom: 5px;
   text-align: ${(props) => (props.alignCenter ? "center" : "start")};
   width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

export const Td = styled.td`
   padding-top: 15px;
   text-align: ${(props) => (props.alignCenter ? "center" : "start")};
   word-break: break-all;

   svg {
    width: 18px;
    height: 18px;
   }

   @media (max-width: 750px) {
      font-size: 14px;
      width: ${(props) => (props.width ? props.width + "%" : "auto")};
   }

   @media (max-width: 280px) {
      font-size: 14px;
      width: ${(props) => (props.width ? props.width = '10%' : 'auto')}
   }
`;

export const Tbody = styled.tbody``;


