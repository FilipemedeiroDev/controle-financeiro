import * as C from './styles';
import useMyContenxt  from '../../Hooks/useMyContext'

export default function Button({ text, handle, style, ...props}) {
  const { isLoading } = useMyContenxt();

  return (
    <C.Button
      onClick={handle}
      style={style}
    >
      { isLoading ? props.children : text } 
    </C.Button>
  )
}