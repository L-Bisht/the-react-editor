import { FitAddon } from "@xterm/addon-fit";
import { Terminal } from "@xterm/xterm";
import { useEffect, useRef } from "react";

type Props = {
  shellId: string;
  cwd: string;
};

const TerminalView = ({ shellId, cwd }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const termRef = useRef<Terminal | null>(null);
  const fitRef = useRef<FitAddon | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const term = new Terminal({
      cursorBlink: true,
      fontSize: 13,
    });

    const fitAddon = new FitAddon();

    term.loadAddon(fitAddon);
    term.open(containerRef.current);
    fitAddon.fit();

    termRef.current = term;
    fitRef.current = fitAddon;

    const terminalId = crypto.randomUUID();

    window.terminalApi.create(terminalId, cwd);

    const disposeListener = window.terminalApi.onData(terminalId, (data) =>
      term.write(data)
    );

    term.onData((data) => {
      window.terminalApi.write(terminalId, data);
    });

    return () => {
      disposeListener();
      window.terminalApi.dispose(terminalId);
      term.dispose();
    };
  }, [shellId, cwd]);

  return <div ref={containerRef} className="w-full h-full bg-black" />;
};

export default TerminalView;
