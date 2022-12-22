import * as C from './styles';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function Reset() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ password: ''});

  const { token } = useParams();
  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  function handleChangeInput(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if(!form.password) {
        toast.error('Preencha o campo senha para continuar')
        return
      }

      await api.post(`/users/reset/${token}`, {
        newPassword: form.password.trim()
      })

      navigate('/sign-in')
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      return
    }
  }

  return (
    <C.Container>
      <C.Form>
        <C.ContentInput>
          <C.Label>Nova senha</C.Label>
          <Input 
            type={showPassword ? 'text' : 'password'}
            placeholder='****'
            name='password'
            value={form.password}
            handle={handleChangeInput}
          />
           {
              showPassword ? 
              <AiFillEye 
                fontSize='24px'
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '38px',
                  cursor: 'pointer'
                }}
                onClick={handleShowPassword}
              /> : 
              <AiFillEyeInvisible 
                fontSize='24px'
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '38px',
                  cursor: 'pointer'
                }}
                onClick={handleShowPassword}
              />
            } 
        </C.ContentInput>
        <Button 
          text='Redefinir senha'
          style={{
            marginTop: '20px'
          }}
          handle={handleSubmit}
        />
      </C.Form>
    </C.Container>
  )
}