import { createContext } from "react";
import { TProjectState } from "./project.types";

const ProjectContext = createContext<TProjectState>({
  path: "",
  setPath: () => {},
  structure: [],
  openedFile: {
    name: "",
    content: "",
    path: "",
  },
  openFile: () => {},
});

export default ProjectContext;
