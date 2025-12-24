import { LucideIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export type TNavItem = {
  id: string;
  title: string;
  icon: LucideIcon;
};

export type TNavState = {
  navItems: TNavItem[];
  selectedNavItemId: string;
  setSelectedNavItemId: Dispatch<SetStateAction<string>>;
};
