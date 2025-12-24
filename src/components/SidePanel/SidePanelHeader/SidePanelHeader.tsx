import { useNav } from "@app/context";
import { Ellipsis } from "lucide-react";
import { useMemo } from "react";

const SidePanelHeader = () => {
  const { navItems, selectedNavItemId } = useNav();
  const selectedNavItem = useMemo(() => {
    return navItems?.find((navItem) => navItem.id === selectedNavItemId);
  }, [navItems, selectedNavItemId]);
  return (
    <div className="w-full p-2 flex-0 flex flex-row justify-between items-center ">
      <h6 className="text-xs">{selectedNavItem?.title?.toUpperCase() ?? ""}</h6>
      <button className="cursor-pointer px-1 hover:bg-gray-100">
        <Ellipsis size={12} />
      </button>
    </div>
  );
};

export default SidePanelHeader;
