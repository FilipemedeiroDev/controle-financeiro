import * as C from './styles'

import { BsArrowDownCircle, BsArrowUpCircle, BsCashCoin} from 'react-icons/bs';

export default function ResumeCards({ type, value }) {
  return (
    <C.Cards>
      <C.HeaderCard>
        <C.Title>{type}</C.Title>
        { type === 'Entradas' && <C.ContentIcons><BsArrowDownCircle /></C.ContentIcons> }
        { type === 'Saidas' && <C.ContentIcons><BsArrowUpCircle /></C.ContentIcons> }
        { type === 'Total' && <C.ContentIcons><BsCashCoin /></C.ContentIcons> } 
      </C.HeaderCard>
  
      <C.Span>{`R$ ${value % 2  === 0 ? value : value.toFixed(2)}`}</C.Span>
    </C.Cards>
  )
}