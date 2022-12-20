import * as C from './styles';

export default function Button({ text, handle, style }) {
  return (
    <C.Button
      onClick={handle}
      style={style}
    >
      {text}
    </C.Button>
  )
}