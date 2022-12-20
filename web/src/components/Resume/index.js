import * as C from './styles';

import ResumeCards from '../ResumeCards';

export default function Resume() {
  return (
    <C.Container>
      <ResumeCards 
        type='Entradas'
        value={1000}
      />
      <ResumeCards 
        type='Saidas' 
        value={450}    
      />
      <ResumeCards 
        type='Total'
        value={1000 - 450}   
      />
    </C.Container>
  )
}