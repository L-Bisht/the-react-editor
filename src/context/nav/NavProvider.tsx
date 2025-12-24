import { PropsWithChildren, useMemo, useState } from "react";
import NavContext from "./NavContext";
import { TNavItem } from "./nav.types";
import { Component, Files, Search } from "lucide-react";
import { NAV_ITEM_ID } from "./nav.constants";

type TProps = PropsWithChildren;
const navItems: TNavItem[] = [
  {
    id: NAV_ITEM_ID.EXPLORER,
    title: "Explorer",
    icon: Files,
  },
  {
    id: NAV_ITEM_ID.SEARCH,
    title: "Search",
    icon: Search,
  },
  {
    id: NAV_ITEM_ID.COMPONENT_VIEW,
    title: "Component View",
    icon: Component,
  },
];

const NavProvider = ({ children }: TProps) => {
  const [selectedNavItemId, setSelectedNavItemId] = useState(
    NAV_ITEM_ID.EXPLORER
  );
  const value = useMemo(() => {
    return {
      navItems,
      selectedNavItemId,
      setSelectedNavItemId,
    };
  }, [selectedNavItemId, setSelectedNavItemId]);
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export default NavProvider;
