import TreeView from "@app/components/UI/TreeView";
import { useProject } from "@app/context/project";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const Explorer = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { path, structure, openFile } = useProject();
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <button
        onClick={() => setIsExpanded((pre) => !pre)}
        className="w-full flex-0 flex flex-row items-center p-1 gap-x-1 cursor-pointer flex-nowrap focus:border focus:border-blue-500"
      >
        {isExpanded ? (
          <ChevronDown className="shrink-0" size={16} />
        ) : (
          <ChevronRight className="shrink-0" size={16} />
        )}
        <p className="text-xs font-bold text-nowrap">
          {path?.split("/").pop()}
        </p>
      </button>

      {isExpanded && (
        <div className="flex-1 w-full overflow-hidden">
          <TreeView
            onNodeClick={(node) =>
              !node.expandable &&
              openFile(
                typeof node.metaData?.path === "string"
                  ? node.metaData?.path
                  : ""
              )
            }
            nodes={structure ?? []}
          />
        </div>
      )}
    </div>
  );
};

export default Explorer;
