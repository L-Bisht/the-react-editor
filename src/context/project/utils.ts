import { TNode } from "@app/components/UI/TreeView";
import { ReadDirEntry } from "electron/shared/ipc";
import { File, Folder } from "lucide-react";
import { FileData } from "./project.types";

export const extractStructureFromPath = async (path: string) => {
  const enteries = await window.projectApi.readDir(path);
  const transformedStructure = await extractStructureFromEnteries(enteries);
  return transformedStructure;
};

export const extractStructureFromEnteries = async (
  entries: ReadDirEntry[]
): Promise<TNode[]> => {
  const response = await Promise.all(
    entries.map(async (entry) => {
      let childNodes;
      if (entry.isDirectory) {
        childNodes = await extractStructureFromPath(entry.path);
      }

      return {
        id: entry.id,
        name: entry.name,
        icon: entry.isDirectory ? Folder : File,
        expandable: entry.isDirectory,
        metaData: {
          path: entry.path,
        },
        ...(Object.keys(childNodes ?? {})?.length ? { childNodes } : {}),
      };
    })
  );

  return response?.sort((a, b) => {
    if (a.expandable !== b.expandable) {
      return a.expandable ? -1 : 1;
    }

    return a.name.localeCompare(b.name);
  });
};

export const extractFileFromPath = async (path: string): Promise<FileData> => {
  const content = await window.projectApi.readFile(path);
  return {
    name: path.split("/").pop() ?? "",
    path,
    content,
  };
};
