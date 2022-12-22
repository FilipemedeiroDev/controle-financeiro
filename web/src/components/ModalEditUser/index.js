import * as C from './styles';
import { useState } from 'react';
import useMyContext from '../../Hooks/useMyContext';

import Input from '../Input';
import Button from '../Button';

import api from '../../services/api'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai'

export default function ModalEditUser() {
  const { user, setShowModalEdit } = useMyContext();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    newPassword: ''
  })

  function handleCloseModal() {
    setShowModalEdit(false)
  }

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  function handleChangeInput(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      
      if(form.newPassword) {
        await api.put('/users', {
          name: form.name,
          email: form.email,
          newPassword: form.newPassword
        })
      } else {
        await api.put('/users', {
          name: form.name,
          email: form.email,
        })
      }
      
      setShowModalEdit(false)
    } catch (error) {
      console.log(error)
      return
    }
  }

  return (
    <C.ModalContainer>
      <C.Modal>
        <AiFillCloseCircle 
          style={{
            position: 'absolute',
            right: '8px',
            top: '10px',
            cursor: 'pointer',
            color: '#000000',
            fontSize: '28px'
          }}
          onClick={handleCloseModal}
        />
        <C.Title>Editar usuário</C.Title>
        <C.ContentInput>
          <C.Label>Nome</C.Label>
          <Input 
            type='text'
            name='name'
            value={form.name}
            handle={handleChangeInput}
          />
        </C.ContentInput>
        <C.ContentInput>
          <C.Label>E-mail</C.Label>
          <Input 
            type='email'
            name='email'
            value={form.email}
            handle={handleChangeInput}
          />
        </C.ContentInput>
        <C.ContentInput>
          <C.Label>Nova senha</C.Label>
          <Input 
            type={showPassword ? 'text' : 'password'}
            placeholder='****'
            name='newPassword'
            value={form.newPassword}
            handle={handleChangeInput}
          />
          {
              showPassword ? 
              <AiFillEye 
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '38px',
                  cursor: 'pointer',
                  color: '#000000',
                  fontSize: '24px'
                }}
                onClick={handleShowPassword}
              /> : 
              <AiFillEyeInvisible 
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '38px',
                  cursor: 'pointer',
                  color: '#000000',
                  fontSize: '24px'
                }}
                onClick={handleShowPassword}
              />
            } 
        </C.ContentInput>
        <Button 
          text='Salvar alterações'
          handle={handleSubmit}
        />
      </C.Modal>
    </C.ModalContainer>
  )
}