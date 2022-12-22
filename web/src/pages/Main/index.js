import * as C from './styles';
import { useEffect } from 'react';

import Header from '../../components/Header';
import Resume from '../../components/Resume';
import useMyContext from '../../Hooks/useMyContext';

function Main() {
  const { getUser } = useMyContext();

  useEffect(() => {
    getUser()
  })
  
  return (
    <C.Container>
      <Header />
      <Resume />
    </C.Container>
  );
}

export default Main;
