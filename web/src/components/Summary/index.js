import * as C from './styles';
import useMyContext from '../../Hooks/useMyContext';

import SummaryCards from '../SummaryCards';

export default function Summary() {
  const {summaries} = useMyContext();

  return (
    <C.Container>
      <SummaryCards 
        type='Entradas'
        value={summaries.totalEntries}
      />
      <SummaryCards 
        type='Saidas' 
        value={summaries.totalExpenses}    
      />
      <SummaryCards 
        type='Total'
        value={summaries.amountTransactions}   
      />
    </C.Container>
  )
}