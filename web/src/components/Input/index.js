import * as C from './styles'

export default function Input({ type, placeholder, name, value, handle, style}) {
  return (
    <C.Input
      type={type} 
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handle}
      style={style}
    />
  )
}