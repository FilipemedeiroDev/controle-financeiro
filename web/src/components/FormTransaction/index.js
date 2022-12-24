import * as C from './styles';
import { useState } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export default function FormTransaction() {
  const [form, setForm] = useState({
    description: '',
    value: '',
    type: '',
  })
  
  const currencyMask = createNumberMask({
    prefix: 'R$ ',
    suffix: '',
    decimalSymbol: ',',
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    allowNegative: false,
    allowLeadingZeros: false
  })

  function handleChangeInput(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  console.log(form)

  return (
    <C.ContentForm>
      <C.ContentInput style={{width: '40%'}}>
        <C.Label>Descrição</C.Label>
        <C.Input 
          type='text'
          name='description'
          value={form.description}
          onChange={handleChangeInput}
        />
      </C.ContentInput>
      <C.ContentInput style={{width: '20%'}}>
        <C.Label>Valor</C.Label>
        <C.Money
          mask={currencyMask} 
          name='value'
          value={form.value}
          onChange={handleChangeInput}
        />
      </C.ContentInput>
      <C.ContentSelect>
        <C.Label htmlFor='select'>Tipo</C.Label>
        <C.Select id='select' name='type' value={form.type} onChange={handleChangeInput}>
          <C.Option value='' disabled></C.Option>
          <C.Option >Entrada</C.Option>
          <C.Option >Saída</C.Option>
        </C.Select>  
      </C.ContentSelect>
      <C.Button>Adicionar</C.Button>
    </C.ContentForm>
  )
}