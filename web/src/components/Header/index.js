import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { clear } from '../../utils/storage';


import { MdOutlineLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg'

export default function Header() {

  const navigate = useNavigate();

  function handleLogout() {
    clear()
    navigate('/sign-in')
  }

  return (
    <C.Header>
      <C.Title>Controle Financeiro</C.Title>

      <C.ContentIcons>
        <CgProfile />
        <MdOutlineLogout 
          onClick={handleLogout}
        />
      </C.ContentIcons>
    </C.Header>
  )
}