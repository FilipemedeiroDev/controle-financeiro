import * as C from './styles';
import useMyContext from '../../Hooks/useMyContext';

import SummaryCards from '../SummaryCards';

export default function Summary() {
  const {summaries} = useMyContext();

  return (
    <C.Container>
      <SummaryCards 
        type='Entradas'
        value={summaries.totalEntries ? summaries.totalEntries : 0}
      />
      <SummaryCards 
        type='Saidas' 
        value={summaries.totalExpenses ? summaries.totalExpenses : 0}    
      />
      <SummaryCards 
        type='Total'
        value={summaries.amountTransactions ? summaries.amountTransactions : 0}   
      />
    </C.Container>
  )
}