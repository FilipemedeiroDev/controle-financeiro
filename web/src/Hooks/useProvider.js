import { useState } from "react";
import { toast } from "react-toastify";

import api from '../services/api';
import { clear } from '../utils/storage';

function useProvider() {
  const [user, setUser] = useState({})
  const [transactions, setTransactions] = useState([])
  const [showModalEdit, setShowModalEdit] = useState(false);

  const getUser = async () => {
    try {
      const response = await api.get('/users/me');
      const user = response.data;
      setUser(user)
    } catch (error) {
      console.log(error.message)
      if(error.response.data.message === 'jwt expired') {
        clear()
        window.location.reload()
        toast.error('Sessão expirada, faça o login novamente.')
      }
      return
    }
  }

  const getTransactions = async () => {
    try {
      const response = await api.get('/transactions');
      const transactions = response.data;
      setTransactions(transactions)
    } catch (error) {
      console.log(error.message)
      return
    }
  }

  return {
    showModalEdit,
    setShowModalEdit,
    getUser,
    user,
    getTransactions
  } 
}

export default useProvider;