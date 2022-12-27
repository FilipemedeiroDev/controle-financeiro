import { useState } from "react";

import api from '../services/api';
import { clear } from '../utils/storage';

function useProvider() {
  const [user, setUser] = useState({})
  const [transactions, setTransactions] = useState([])
  const [summaries, setSummaries] = useState([])
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

  const getSummaries = async () => {
    try {
      const response = await api.get('/transactions/summaries')
      const summaries = response.data;
      setSummaries(summaries)
    } catch (error) {
      console.log(error.message)
      return
    }

  }

  const addTransaction = (data) => {
    setTransactions(prev => [...prev, data])
  }

  const deleteTransaction = (transactionId) => {
    setTransactions(prev => prev.filter(transactions => transactions._id !== transactionId))
  }

  return {
    showModalEdit,
    setShowModalEdit,
    getUser,
    user,
    getTransactions,
    transactions,
    setTransactions,
    addTransaction,
    deleteTransaction,
    getSummaries,
    summaries,
  } 
}

export default useProvider;