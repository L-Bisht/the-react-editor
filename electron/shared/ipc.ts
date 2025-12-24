import { JSXElement } from "@babel/types";
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

export interface JsxParserAPI {
  parseFile: (filePath: string) => Promise<JSXElement>;
}
