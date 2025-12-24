import { ipcRenderer } from "electron";
import { JsxParserAPI } from "electron/shared/ipc";

export const jsxParserAPI: JsxParserAPI = {
  parseFile: (filePath) => ipcRenderer.invoke("jsx:parse-file", filePath),
};
