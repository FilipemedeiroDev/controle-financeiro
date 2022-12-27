import * as C from './styles';
import { useState } from 'react';
import { toast } from 'react-toastify';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import useMyContext from '../../Hooks/useMyContext';

import api from '../../services/api';

export default function FormTransaction() {
  const { addTransaction, getSummaries} = useMyContext()
  const [form, setForm] = useState({
    description: '',
    value: '',
    date: '',
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

  async function handleSubmit(e) {
    e.preventDefault();

    if(!form.description || !form.value || !form.date || !form.type) {
      return toast.error('Preencha todos os campo para registrar uma nova transação')
    }

    try {

      const formattedValue = parseFloat(form.value.replace('R$', '').replace('.', '').replace(',','.'));

      const { data } = await api.post('/transactions', {
        description: form.description.trim(),
        value: formattedValue,
        date: form.date,
        type: form.type
      })

      addTransaction(data)
      getSummaries()
     
      setForm({
        description: '',
        value: '',
        date: '',
        type: ''
      })
    } catch (error) {
      console.log(error)
      return
    }
  }

  return (
    <C.ContentForm>
      <C.ContentInput style={{width: '30%'}}>
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
      <C.ContentInput style={{width: '10%'}}>
        <C.Label>data</C.Label>
        <C.Input 
          type='date'
          name='date'
          value={form.date}
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
      <C.Button 
        onClick={handleSubmit}
      >
      Adicionar
      </C.Button>
    </C.ContentForm>
  )
}