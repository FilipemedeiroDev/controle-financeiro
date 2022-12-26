import * as C from './styles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";
import useMyContext from '../../Hooks/useMyContext';

import api from '../../services/api';

export default function Table() {
  const { transactions, deleteTransaction } = useMyContext();

 function handleDelete(transactionId) {
    return async () => {
        try {
          await api.delete(`/transactions/${transactionId}`)
          deleteTransaction(transactionId)
    
        } catch (error) {
          console.log(error.message)
          return
        }
    }
  }

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>valor</C.Th>
          <C.Th width={10} alignCenter>tipo</C.Th>
          <C.Th width={10}>&nbsp;</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {transactions.map((transaction) => (
          <C.Tr key={transaction._id}>
            <C.Td>{transaction.description}</C.Td>
            <C.Td>{transaction.value}</C.Td>
            <C.Td alignCenter>
              {transaction.type === 'Saída' ? (
              <FaRegArrowAltCircleDown color="red" />
              ) : (
              <FaRegArrowAltCircleUp color="green" />
              )}
            </C.Td>
            <C.Td alignCenter>
               <FaTrash 
                style={{
                  cursor: 'pointer'
                }}
                onClick={handleDelete(transaction._id)}
               />
            </C.Td>
          </C.Tr>
        ))}
      </C.Tbody>
    </C.Table>
  )
}