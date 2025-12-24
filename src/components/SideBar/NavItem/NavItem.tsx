import { LucideIcon } from "lucide-react";
import { TIconProps } from "@app/types";
import { memo } from "react";

type TProps = {
  id: string;
  icon: LucideIcon;
  title: string;
  iconProps?: TIconProps;
  isActive?: boolean;
  onClick?: (value: string) => void;
};

const NavItem = ({
  id,
  title,
  icon: Icon,
  iconProps,
  isActive,
  onClick,
}: TProps) => {
  return (
    <li
      className={`border-l-3 ${
        isActive ? "border-l-indigo-700" : "border-l-transparent"
      }`}
    >
      <button
        title={title}
        className="p-2 cursor-pointer"
        onClick={() => onClick?.(id)}
      >
        <Icon className="hover:stroke-2" size={28} {...iconProps} />
      </button>
    </li>
  );
};

export default memo(NavItem);
