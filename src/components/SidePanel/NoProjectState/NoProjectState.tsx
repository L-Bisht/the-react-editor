import { useProject } from "@app/context/project";
import { useCallback } from "react";

const NoProjectState = () => {
  const { setPath } = useProject();
  const handleOpenProject = useCallback(async () => {
    const result = await window.projectApi.openProject();
    if (!result) return;
    setPath(result.path);
  }, [setPath]);
  return (
    <div className="w-full h-full p-2">
      <div className="w-full flex flex-col items-center gap-y-2">
        <p className="text-sm min-w-0 truncate">No project selected</p>
        <button
          onClick={handleOpenProject}
          className="text-nowrap px-2 py-1 cursor-pointer rounded-xs bg-blue-600 hover:shadow-xs shadow-blue-500 text-white text-sm transition-all"
        >
          Open Project
        </button>
      </div>
    </div>
  );
};

export default NoProjectState;
