import { useContext } from "react";
import ProjectContext from "./ProjectContext";

const useProject = () => {
  const context = useContext(ProjectContext);
  return context;
};

export default useProject;
