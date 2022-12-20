import { useContext } from "react";
import MyContext from "../contexts/MyContext";

function useMyContext() {
  return useContext(MyContext)
}

export default useMyContext;