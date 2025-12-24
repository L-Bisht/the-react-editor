import { PropsWithChildren } from "react";
import { NavProvider } from "./nav";
import { ProjectProvider } from "./project";

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <NavProvider>
      <ProjectProvider>{children}</ProjectProvider>
    </NavProvider>
  );
};

export default RootProvider;
