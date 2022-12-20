import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'

import Input from '../../components/Input';
import Button from '../../components/Button';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import api from '../../services/api';

export default function SigUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  })

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
      if(!form.nome) {
        alert('Preencha o campo nome para continuar')
        return
      }

      if(!form.email) {
        alert('Preencha o campo e-mail para continuar')
        return
      }

      if(!form.senha) {
        alert('Preencha o campo senha para continuar')
        return
      }

      await api.post('/users', {
        name: form.nome.trim(),
        email: form.email.trim(),
        password: form.senha.trim()
      })

      alert('Usuário cadastrado com sucesso!')
      navigate('/sign-in')
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
      return
    }
  }

  return (
    <C.Container>
       <C.LeftContent></C.LeftContent>
       <C.RightContent>
        <C.Form>
          <C.Title>Faça o seu cadastro</C.Title>

          <C.ContentInput>
            <C.Label>Nome</C.Label>
            <Input 
              type='text'
              placeholder='Digite seu nome'
              name='nome'
              value={form.nome}
              handle={handleChangeInput}
            />
          </C.ContentInput>

          <C.ContentInput>
            <C.Label>E-mail</C.Label>
            <Input 
              type='email'
              placeholder='Digite seu melhor email'
              name='email'
              value={form.value}
              handle={handleChangeInput}
            />
          </C.ContentInput>

          <C.ContentInput>
            <C.Label>Senha</C.Label>
            <Input 
              type={showPassword ? 'text' : 'password'}
              placeholder='****'
              name='senha'
              value={form.senha}
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
            text='Cadastrar'
            handle={handleSubmit}
          />
          <C.Span>Já tem cadastro?<C.Link href='/sign-in'>Clique aqui!</C.Link></C.Span>
        </C.Form>
      </C.RightContent>
    </C.Container>
  )
}