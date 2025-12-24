import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <main className="w-screen h-screen flex flex-row">{children}</main>;
};

export default Layout;
