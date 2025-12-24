import { createContext } from "react";
import { TNavState } from "./nav.types";

const NavContext = createContext<TNavState>({
  navItems: [],
  selectedNavItemId: "",
  setSelectedNavItemId: () => {},
});

export default NavContext;
