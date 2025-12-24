import SidePanelHeader from "./SidePanelHeader";
import SidePanelContent from "./SidePanelContent";
import { useProject } from "@app/context/project";
import NoProjectState from "./NoProjectState";

const SidePanel = () => {
  const { path } = useProject();
  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <SidePanelHeader />
      {path ? (
        <div className="flex-1 w-full h-full overflow-hidden">
          <SidePanelContent />
        </div>
      ) : (
        <NoProjectState />
      )}
    </div>
  );
};

export default SidePanel;
