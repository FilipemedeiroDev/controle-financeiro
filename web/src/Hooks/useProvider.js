import { useState } from "react";

import api from '../services/api';

function useProvider() {
  const [user, setUser] = useState({})
  const [showModalEdit, setShowModalEdit] = useState(false);

  const getUser = async () => {
    try {
      const response = await api.get('/users/me');
      const user = response.data;
      setUser(user)
    } catch (error) {
      console.log(error.message)
      return
    }
  }

  return {
    showModalEdit,
    setShowModalEdit,
    getUser,
    user
  } 
}

export default useProvider;