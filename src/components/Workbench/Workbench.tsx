import EditorArea from "@app/components/EditorArea";
import SidePanel from "@app/components/SidePanel";
// import ActivityPanel from "@app/components/ActivityPanel";
import { Panel, PanelGroup } from "react-resizable-panels";
import BottomPanel from "../BottomPanel";
import ResizeHandleBar from "./ResizeHandleBar";

const Workbench = () => {
  return (
    <div className="h-full w-full">
      <PanelGroup autoSaveId="example" direction="horizontal">
        <Panel defaultSize={25}>
          <SidePanel />
        </Panel>
        <ResizeHandleBar />
        <Panel minSize={25}>
          <PanelGroup autoSaveId="example" direction="vertical">
            <Panel>
              <EditorArea />
            </Panel>
            <ResizeHandleBar />
            <Panel>
              <BottomPanel></BottomPanel>
            </Panel>
          </PanelGroup>
        </Panel>
        {/* <ResizeHandleBar />
        <Panel defaultSize={25}>
          <ActivityPanel />
        </Panel> */}
      </PanelGroup>
    </div>
  );
};

export default Workbench;
