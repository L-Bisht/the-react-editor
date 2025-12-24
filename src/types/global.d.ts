import { ElectronProjectAPI, JsxParserAPI } from "electron/shared/ipc";

declare global {
  interface Window {
    projectApi: ElectronProjectAPI;
    jsxParserApi: JsxParserAPI;
  }
}
