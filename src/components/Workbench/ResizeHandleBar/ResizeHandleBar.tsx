import { PanelResizeHandle } from "react-resizable-panels";

const ResizeHandleBar = () => {
  return (
    <PanelResizeHandle className="border border-gray-200 hover:border-2 active:border-2 hover:border-blue-500 active:border-blue-500 transition-all" />
  );
};

export default ResizeHandleBar;
