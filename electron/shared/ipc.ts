import { IpcRenderer } from "electron";

export interface ReadDirEntry {
  id: string;
  name: string;
  path: string;
  isDirectory: boolean;
}

export interface RootPath {
  path: string;
}

export interface ElectronProjectAPI {
  openProject(): Promise<RootPath | null>;
  readDir(path: string): Promise<ReadDirEntry[]>;
  readFile(path: string): Promise<string>;
}

export type TerminalShell = {
  id: string;
  label: string;
  path: string;
  args?: string[];
  isDefault: boolean;
};

export interface TerminalShellAPI {
  listShells: () => void;
  create: (shellId: string, cwd?: string) => void;
  write: (id: string, data: string) => void;
  onData: (id: string, cb: (data: string) => void) => () => IpcRenderer;
  dispose: (id: string) => void;
}
