import { useProject } from "@app/context/project";
import CodeTab from "../CodeTab";

const EditorHeader = () => {
  const { openedFile } = useProject();
  return (
    openedFile && (
      <div className="flex flex-row">
        {[{ id: openedFile.path, label: openedFile.name, isActive: true }].map(
          (tab) => (
            <CodeTab
              key={tab.id}
              onClick={(id) => console.log(id)}
              id={tab.id}
              isActive={tab.isActive}
              label={tab.label}
            />
          )
        )}
        <div className="flex-1 border-y-2 border-gray-300"></div>
      </div>
    )
  );
};

export default EditorHeader;
