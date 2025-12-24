import { useTerminal } from "@app/context/terminal";
import { useState } from "react";

const BottomPanelHeader = () => {
  const { shells = [] } = useTerminal();
  const [selectedShell, setSelectedShell] = useState(
    () => shells.find((shell) => shell.isDefault)?.id
  );
  return (
    <div className="w-full flex flex-row justify-end gap-x-2">
      <select
        value={selectedShell}
        onChange={(e) => setSelectedShell(e.target.value)}
      >
        {shells.map((shell) => (
          <option key={shell.id}>{shell.id}</option>
        ))}
      </select>
    </div>
  );
};

export default BottomPanelHeader;
