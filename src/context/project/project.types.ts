import { TNode } from "@app/components/UI/TreeView";
import { Dispatch, SetStateAction } from "react";

export type FileData = {
  name: string;
  path: string;
  content: string;
};

export type TProjectState = {
  path: string | null;
  setPath: Dispatch<SetStateAction<string | null>>;
  structure: TNode[] | null;
  openedFile: FileData | null;
  openFile: (path: string) => void;
};
