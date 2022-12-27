import * as C from './styles';
import useMyContext from '../../Hooks/useMyContext';

import ResumeCards from '../ResumeCards';

export default function Resume() {
  const {summaries} = useMyContext();

  return (
    <C.Container>
      <ResumeCards 
        type='Entradas'
        value={summaries.totalEntries}
      />
      <ResumeCards 
        type='Saidas' 
        value={summaries.totalExpenses}    
      />
      <ResumeCards 
        type='Total'
        value={summaries.amountTransactions}   
      />
    </C.Container>
  )
}