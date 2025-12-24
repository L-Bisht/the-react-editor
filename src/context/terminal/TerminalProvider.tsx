import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import TerminalContext from "./TerminalContext";
import { TerminalShell } from "electron/shared/ipc";

type TProps = PropsWithChildren;

const TerminalProvider = ({ children }: TProps) => {
  const [shells, setShells] = useState<TerminalShell[]>([]);
  const [selectedShellId, setSelectedShellId] = useState<string | null>(null);

  useEffect(() => {
    window.terminalApi.listShells().then((res) => {
      setShells(res);
      setSelectedShellId(
        () => res.find(({ isDefault }) => isDefault)?.id || null
      );
    });
  }, []);

  const value = useMemo(() => {
    return {
      shells,
      selectedShellId,
      setSelectedShellId,
    };
  }, [shells, selectedShellId]);

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
};

export default TerminalProvider;
