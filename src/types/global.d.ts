import { ElectronProjectAPI, TerminalShellAPI } from "electron/shared/ipc";

declare global {
  interface Window {
    projectApi: ElectronProjectAPI;
    terminalApi: TerminalShellAPI;
  }
}
