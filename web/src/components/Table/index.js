import * as C from './styles';
import { formatDate }  from '../../utils/dataFormat';
import useMyContext from '../../Hooks/useMyContext';

import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";

import api from '../../services/api';

export default function Table() {
  const { transactions, deleteTransaction, getSummaries } = useMyContext();

 function handleDelete(transactionId) {
    return async () => {
        try {
          await api.delete(`/transactions/${transactionId}`)
          deleteTransaction(transactionId)
          getSummaries()
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
          <C.Th>Descrição</C.Th>
          <C.Th>valor</C.Th>
          <C.Th>data</C.Th>
          <C.Th alignCenter>tipo</C.Th>
          <C.Th>&nbsp;</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {transactions.map((transaction) => (
          <C.Tr key={transaction._id}>
            <C.Td>{transaction.description}</C.Td>
            <C.Td>{`R$ ${transaction.value % 2  === 0 ? transaction.value : transaction.value.toFixed(2).replace('.', ',')}`}</C.Td>
            <C.Td >{formatDate(transaction.date)}</C.Td>
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