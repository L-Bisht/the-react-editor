import { ipcRenderer } from "electron";
import { ElectronProjectAPI } from "electron/shared/ipc";

export const projectApi: ElectronProjectAPI = {
  openProject: () => ipcRenderer.invoke("project:open"),
  readDir: (path) => ipcRenderer.invoke("project:readDir", path),
  readFile: (path) => ipcRenderer.invoke("file:open", path),
};
