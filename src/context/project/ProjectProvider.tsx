import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ProjectContext from "./ProjectContext";
import { TNode } from "@app/components/UI/TreeView";
import { extractFileFromPath, extractStructureFromPath } from "./utils";
import { FileData } from "./project.types";

type TProps = PropsWithChildren;

const ProjectProvider = ({ children }: TProps) => {
  const [path, setPath] = useState<string | null>(null);
  const [structure, setStructure] = useState<TNode[] | null>(null);
  const [openedFile, setOpenedFile] = useState<FileData | null>(null);

  const openFile = useCallback(async (path: string) => {
    if (!path) return;
    const fileData = await extractFileFromPath(path);
    setOpenedFile(fileData);
  }, []);

  useEffect(() => {
    if (!path) return;
    extractStructureFromPath(path).then((res) => setStructure(res));
  }, [path]);

  const value = useMemo(() => {
    return {
      path,
      setPath,
      structure,
      openedFile,
      openFile,
    };
  }, [path, structure, openFile, openedFile]);
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectProvider;
