import * as C from './styles';
import { useState } from 'react';
import useMyContext from '../../Hooks/useMyContext';
import { toast } from 'react-toastify';

import Input from '../Input';
import Button from '../Button';
import Loading from '../Loading';

import api from '../../services/api'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai'

export default function ModalEditUser() {
  const { user, setShowModalEdit, setIsLoading } = useMyContext();
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
    setIsLoading(true);

    try { 
      if(form.newPassword) {
        
        if(form.newPassword.length < 6) {
          setIsLoading(false)
          toast.error('A senha deve ter no minimo 6 caracteres')
          return
        }
        
        await api.put('/users', {
          name: form.name.trim(),
          email: form.email.trim(),
          newPassword: form.newPassword.trim()
        })

      } else {
        await api.put('/users', {
          name: form.name.trim(),
          email: form.email.trim(),
        })
      }
      
      setShowModalEdit(false)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
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
        <C.Title style={{marginBottom: '10px'}}>Redefinir senha</C.Title>
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
        >
          <Loading 
            width={18}
          />
        </Button>
      </C.Modal>
    </C.ModalContainer>
  )
}