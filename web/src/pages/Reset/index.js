import * as C from './styles';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useMyContext from '../../Hooks/useMyContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import api from '../../services/api';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function Reset() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ password: ''});

  const { setIsLoading } = useMyContext();
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
    setIsLoading(true);

    try {
      if(!form.password) {
        setIsLoading(false)
        toast.error('Preencha o campo senha para continuar')
        return
      }

      if(form.password.length < 6){
        setIsLoading(false)
        toast.error('A senha deve ter no minimo 6 caracteres')
        return
      }
      
      await api.post(`/users/reset/${token}`, {
        newPassword: form.password.trim()
      })

      navigate('/sign-in')
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
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
        >
          <Loading />
        </Button>
      </C.Form>
    </C.Container>
  )
}