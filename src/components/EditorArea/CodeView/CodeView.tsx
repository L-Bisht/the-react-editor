import { Editor } from "@monaco-editor/react";
import { useProject } from "@app/context/project";
import CodeHeader from "./CodeHeader";
import { FILE_EXTENSION_TO_LANGUAGE } from "../constants";

const CodeView = () => {
  const { openedFile } = useProject();
  const extension =
    openedFile?.name?.split(".")?.pop()?.toLowerCase() ?? "default";
  const language =
    FILE_EXTENSION_TO_LANGUAGE[
      extension in FILE_EXTENSION_TO_LANGUAGE ? extension : "default"
    ];
  return (
    <>
      <CodeHeader />
      {openedFile && (
        <Editor
          language={language}
          defaultLanguage="plaintext"
          value={openedFile.content}
        />
      )}
    </>
  );
};

export default CodeView;
