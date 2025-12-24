import { ElectronProjectAPI } from "electron/shared/ipc";

declare global {
  interface Window {
    projectApi: ElectronProjectAPI;
  }
}
