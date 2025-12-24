import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";

type TProps = {
  name: string;
  depth: number;
  onClick: () => void;
  icon?: LucideIcon;
  isExpanded?: boolean;
  isSelected?: boolean;
  expandable?: boolean;
};

const TreeItem = ({
  name,
  depth,
  onClick,
  icon: Icon,
  isExpanded = false,
  isSelected = false,
  expandable = false,
}: TProps) => {
  return (
    <button
      onClick={onClick}
      style={{ paddingLeft: `${depth * 20 + (expandable ? 0 : 20)}px` }}
      className={`w-full flex items-center gap-x-1 cursor-pointer ${
        isSelected
          ? "bg-sky-800/70 border border-sky-800 text-white"
          : "hover:bg-gray-300/50"
      }`}
    >
      {expandable &&
        (isExpanded ? (
          <ChevronDown className="shrink-0" size={18} />
        ) : (
          <ChevronRight className="shrink-0" size={18} />
        ))}

      <div className="flex items-center gap-x-1 flex-1 min-w-0">
        {Icon && (
          <Icon className="shrink-0" fill="gray" stroke="gray" size={16} />
        )}
        <p className="text-sm truncate text-left">{name}</p>
      </div>
    </button>
  );
};

export default TreeItem;
