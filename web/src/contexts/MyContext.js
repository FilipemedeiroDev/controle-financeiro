import { createContext } from "react";
import useProvider from "../Hooks/useProvider";

const MyContext = createContext({});

export function MyProvider(props) {
  const myProvider = useProvider();

  return (
    <MyContext.Provider value={myProvider}>{props.children}</MyContext.Provider>
  )
}

export default MyContext;