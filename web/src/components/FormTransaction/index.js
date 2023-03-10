import * as C from './styles';
import { useState } from 'react';
import { toast } from 'react-toastify';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import useMyContext from '../../Hooks/useMyContext';

import Loading from '../Loading';

import api from '../../services/api';

import { IoIosArrowDown } from 'react-icons/io';

export default function FormTransaction() {
  const [showFormTransaction, setShowFormTransaction] = useState(true);
  const { addTransaction, getSummaries , isLoading, setIsLoading} = useMyContext()
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
    setIsLoading(true);

    if(!form.description || !form.value || !form.date || !form.type) {
      setIsLoading(false)
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
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      return
    }
  }

  return (
    <C.ContentForm>
      <C.ContentIcon>
       <IoIosArrowDown  onClick={() => setShowFormTransaction(!showFormTransaction)}/>
      </C.ContentIcon>
      <C.ContentInput width={30} showFormTransaction={showFormTransaction}>
        <C.Label>Descrição</C.Label>
        <C.Input 
          type='text'
          name='description'
          value={form.description}
          onChange={handleChangeInput}
        />
      </C.ContentInput>
      <C.ContentInput width={20} showFormTransaction={showFormTransaction}>
        <C.Label>Valor</C.Label>
        <C.Money
          mask={currencyMask} 
          name='value'
          value={form.value}
          onChange={handleChangeInput}
        />
      </C.ContentInput>
      <C.ContentInput width={10} showFormTransaction={showFormTransaction}>
        <C.Label>data</C.Label>
        <C.Input 
          type='date'
          name='date'
          value={form.date}
          onChange={handleChangeInput}
        />
      </C.ContentInput>
      <C.ContentSelect width={10} showFormTransaction={showFormTransaction}>
        <C.Label htmlFor='select'>Tipo</C.Label>
        <C.Select id='select' name='type' value={form.type} onChange={handleChangeInput}>
          <C.Option value='' disabled></C.Option>
          <C.Option >Entrada</C.Option>
          <C.Option >Saída</C.Option>
        </C.Select>  
      </C.ContentSelect>
      <C.Button 
        width={30}
        onClick={handleSubmit}
        showFormTransaction={showFormTransaction}
      >
      {isLoading ? <Loading /> : 'Adicionar'}
      </C.Button>
    </C.ContentForm>
  )
}