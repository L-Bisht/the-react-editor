import { TerminalShell } from "electron/shared/ipc";
import { Dispatch, SetStateAction } from "react";

export type TTerminalState = {
  shells: TerminalShell[];
  selectedShellId: string | null;
  setSelectedShellId: Dispatch<SetStateAction<string | null>>;
};
