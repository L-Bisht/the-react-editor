import { useTerminal } from "@app/context/terminal";
import BottomPanelHeader from "./BottomPanelHeader";
import TerminalView from "./TerminalView";
import { useProject } from "@app/context/project";

const BottomPanel = () => {
  const { selectedShellId } = useTerminal();
  const { path } = useProject();
  return (
    <div className="w-full h-full">
      <BottomPanelHeader />
      {selectedShellId && path && (
        <TerminalView shellId={selectedShellId} cwd={path} />
      )}
    </div>
  );
};

export default BottomPanel;
