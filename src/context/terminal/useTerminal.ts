import { useContext } from "react";
import TerminalContext from "./TerminalContext";

const useTerminal = () => {
  const context = useContext(TerminalContext);
  return context;
};

export default useTerminal;
