import * as C from './styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../utils/storage';
import useMyContext from '../../Hooks/useMyContext';

import Header from '../../components/Header';
import Resume from '../../components/Resume';
import FormTransaction from '../../components/FormTransaction';

function Main() {
  const { getUser, getTransactions } = useMyContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem('token') 

    if(!token) {
      navigate('/sign-in')
    }
    
    getUser()
    getTransactions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <C.Container>
      <Header />
      <Resume />
      <FormTransaction />
    </C.Container>
  );
}

export default Main;
