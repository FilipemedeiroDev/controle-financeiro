import * as C from './styles';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import api from '../../services/api'
import { setItem, getItem} from '../../utils/storage';

export default function SigIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    const token = getItem('token');

    if (token) {
        navigate('/main')
    }
  });


  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  function handleChangeInput(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if(!form.email) {
      toast.error('Preencha o campo email para continuar')
      return
    }

    if(!form.password) {
      toast.error('Preencha o campo senha para continuar')
      return
    }

    try {
      const response = await api.post('/users/login',{
        email: form.email.trim(),
        password: form.password.trim()
      })

      const { token, user } = response.data;
      setItem('token', token);
      setItem('userId', user.id);
      setItem('name', user.nome)

      navigate('/');
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      return
    }
  }

  return (
    <C.Container>
      <C.LeftContent>
        <C.Form>
          <C.Title>Faça o login na plataforma</C.Title>

          <C.ContentInput>
            <C.Label>E-mail</C.Label>
            <Input
              type='email'
              placeholder='Digite seu e-mail'
              name='email'
              value={form.email}
              handle={handleChangeInput}
            />
          </C.ContentInput>

         <C.ContentInput>
            <C.Label>Senha</C.Label>
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
           <C.Link href='/forgot' style={{ textAlign: 'center'}}>Esqueceu sua senha?</C.Link> 
          <Button 
            text='Entrar'
            handle={handleSubmit}
          />
          <C.Span>Ainda não tem cadastro?<C.Link href='/sign-up'>Clique aqui!</C.Link></C.Span>
        </C.Form>
      </C.LeftContent>
      <C.RigthContent></C.RigthContent>
    </C.Container>
  )
}