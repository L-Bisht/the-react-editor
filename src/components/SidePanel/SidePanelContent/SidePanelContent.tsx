import { useNav } from "@app/context";
import { NAV_ITEM_ID } from "@app/context/nav/nav.constants";
import Explorer from "../Explorer";

const SidePanelContent = () => {
  const { selectedNavItemId } = useNav();

  if (selectedNavItemId === NAV_ITEM_ID.EXPLORER) return <Explorer />;

  return null;
};

export default SidePanelContent;
