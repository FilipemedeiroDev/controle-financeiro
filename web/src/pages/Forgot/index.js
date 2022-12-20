import * as C from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Forgot() {
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
            />
          </C.ContentInput>
          <Button 
            text='Enviar e-mail'
            style={{
              marginTop: '20px'
            }}
          />
          <C.Link href='/sign-in'>Voltar para o login</C.Link>
        </C.Form>
      </C.Content>
    </C.Container>
  )
}