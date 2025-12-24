import { createContext } from "react";
import { TTerminalState } from "./terminal.types";

const TerminalContext = createContext<TTerminalState>({
  shells: [],
});

export default TerminalContext;
