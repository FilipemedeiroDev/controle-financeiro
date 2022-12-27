import * as C from './styles'

import { BsArrowDownCircle, BsArrowUpCircle, BsCashCoin} from 'react-icons/bs';

export default function SummaryCards({ type, value }) {
  return (
    <C.Cards>
      <C.HeaderCard>
        <C.Title>{type}</C.Title>
        { type === 'Entradas' && <C.ContentIcons><BsArrowDownCircle style={{color: 'green'}}/></C.ContentIcons> }
        { type === 'Saidas' && <C.ContentIcons><BsArrowUpCircle style={{color: 'red'}}/></C.ContentIcons> }
        { type === 'Total' && <C.ContentIcons><BsCashCoin style={{color: 'green'}}/></C.ContentIcons> } 
      </C.HeaderCard>
  
      <C.Span style={{ color: value < 0 ? 'red' : 'black'}}>{`R$ ${value}`}</C.Span>
    </C.Cards>
  )
}