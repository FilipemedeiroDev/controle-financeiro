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
`;

export const Td = styled.td`
   padding-top: 15px;
   text-align: ${(props) => (props.alignCenter ? "center" : "start")};
   word-break: break-all;
   font-size: 14px;

   svg {
    width: 18px;
    height: 18px;
   }

   @media (max-width: 750px) {
      font-size: 12px;
   }

   @media (max-width: 280px) {
      font-size: 10px;
   }
`;

export const Tbody = styled.tbody``;


