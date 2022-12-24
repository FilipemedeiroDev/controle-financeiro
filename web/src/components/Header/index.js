import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { clear } from '../../utils/storage';

import { MdOutlineLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

import ModalEditUser from '../ModalEditUser';
import useMyContext from '../../Hooks/useMyContext';


export default function Header() {
  const { showModalEdit ,setShowModalEdit, user }  = useMyContext();
  const navigate = useNavigate();

  function handleLogout() {
    clear()
    navigate('/sign-in')
  }

  function handleShowModal() {
    setShowModalEdit(true)
  }

  return (
    <C.Header>
      <C.Title>Controle Financeiro</C.Title>

      <C.ContentIcons>
        <C.Strong>Olá, {user.name}</C.Strong>
        <CgProfile 
          onClick={handleShowModal}
        />
        {showModalEdit && <ModalEditUser />}
        <MdOutlineLogout 
          onClick={handleLogout}
        />
      </C.ContentIcons>
    </C.Header>
  )
}