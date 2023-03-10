import * as C from './styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../utils/storage';
import useMyContext from '../../Hooks/useMyContext';

import Header from '../../components/Header';
import Summary from '../../components/Summary';
import FormTransaction from '../../components/FormTransaction';
import Table from '../../components/Table';

function Main() {
  const { getUser, getTransactions, getSummaries} = useMyContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem('token') 

    if(!token) {
      navigate('/sign-in')
    }
    
    getUser()
    getTransactions()
    getSummaries()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <C.Container>
      <Header />
      <Summary />
      <FormTransaction />
      <Table />
    </C.Container>
  );
}

export default Main;
