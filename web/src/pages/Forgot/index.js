import * as C from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useMyContext from '../../Hooks/useMyContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import api from '../../services/api';

export default function Forgot() {
  const [form, setForm] = useState({email: ''});

  const { setIsLoading } = useMyContext();

  const navigate = useNavigate();

  function handleChangeInput(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if(!form.email) {
        setIsLoading(false)
        toast.error('Preencha o campo e-mail para continuar')
        return
      }

      await api.post('/users/forgot', {
        email: form.email.trim()
      })

      toast.success('E-mail enviado com sucesso!')
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
      <C.Content>
        <C.Form>
          <C.Title>Redefinição de senha</C.Title>
          <C.Text>Insira o e-mail cadastrado para receber as instruções de redefinição de senha</C.Text>
          <C.ContentInput>
            <C.Label>E-mail</C.Label>
            <Input 
              type='email'
              placeholder='Insira o e-mail cadastrado'
              name='email'
              value={form.email}
              handle={handleChangeInput}
            />
          </C.ContentInput>
          <Button 
            text='Enviar e-mail'
            style={{
              marginTop: '20px'
            }}
            handle={handleSubmit}
          >
            <Loading />
          </Button>
          <C.Link href='/sign-in'>Voltar para o login</C.Link>
        </C.Form>
      </C.Content>
    </C.Container>
  )
}