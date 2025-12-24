import { PropsWithChildren } from "react";
import { NavProvider } from "./nav";
import { ProjectProvider } from "./project";
import { TerminalProvider } from "./terminal";

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <NavProvider>
      <ProjectProvider>
        <TerminalProvider>{children}</TerminalProvider>
      </ProjectProvider>
    </NavProvider>
  );
};

export default RootProvider;
