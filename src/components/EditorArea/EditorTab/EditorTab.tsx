import { X } from "lucide-react";

type TProps = {
  id: string;
  label: string;
  isActive?: boolean;
  onClick: (id: string) => void;
};

const EditorTab = ({ id, label, isActive = false, onClick }: TProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`flex flex-row justify-between w-fit gap-x-3
              px-2 py-1 text-sm font-medium
              border-t-2 border-r-2 border-r-gray-300 transition-colors
              ${
                isActive
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }
            `}
    >
      <p>{label}</p>
      <button className="cursor-pointer ">
        <X size={12} />
      </button>
    </div>
  );
};

export default EditorTab;
