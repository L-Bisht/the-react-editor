import BottomPanelHeader from "./BottomPanelHeader";
import { useProject } from "@app/context/project";

const BottomPanel = () => {
  const { path } = useProject();
  return (
    <div className="w-full h-full">
      <BottomPanelHeader />
      {path && <div className="p-4">No terminal available.</div>}
    </div>
  );
};

export default BottomPanel;
