import Editor from "@monaco-editor/react";
import EditorHeader from "./EditorHeader";
import { useProject } from "@app/context/project";
import { FILE_EXTENSION_TO_LANGUAGE } from "./constants";

function EditorArea() {
  const { openedFile } = useProject();
  const extension =
    openedFile?.name?.split(".")?.pop()?.toLowerCase() ?? "default";
  const language =
    FILE_EXTENSION_TO_LANGUAGE[
      extension in FILE_EXTENSION_TO_LANGUAGE ? extension : "default"
    ];
  return (
    <div className="h-full w-full">
      <EditorHeader />
      {openedFile && (
        <Editor
          language={language}
          defaultLanguage="plaintext"
          value={openedFile.content}
        />
      )}
    </div>
  );
}

export default EditorArea;
