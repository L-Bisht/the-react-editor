import { ipcRenderer } from "electron";
import { TerminalShellAPI } from "electron/shared/ipc";

export const terminaApi: TerminalShellAPI = {
  listShells: () => ipcRenderer.invoke("terminal:list-shells"),
  create: (shellId, cwd) =>
    ipcRenderer.invoke("terminal:create", { shellId, cwd }),
  write: (id, data) => ipcRenderer.send("terminal:write", { id, data }),
  onData: (id, cb) => {
    const channel = `terminal:data:${id}`;
    ipcRenderer.on(channel, (_, data: string) => cb(data));

    return () => ipcRenderer.removeAllListeners(channel);
  },
  dispose: (id) => ipcRenderer.send("terminal:dispose", id),
};
