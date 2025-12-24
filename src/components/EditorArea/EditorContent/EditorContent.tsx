import { useNav } from "@app/context";
import { NAV_ITEM_ID } from "@app/context/nav/nav.constants";
import ComponentView from "../ComponentView/ComponentView";
import CodeView from "../CodeView";

const EditorContent = () => {
  const { selectedNavItemId } = useNav();

  if (selectedNavItemId === NAV_ITEM_ID.COMPONENT_VIEW)
    return <ComponentView />;

  return <CodeView />;
};

export default EditorContent;
