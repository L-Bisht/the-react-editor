import os from "node:os";

type IPty = import("node-pty").IPty;

type TerminalSession = {
  pty: IPty;
};

const terminals = new Map<string, TerminalSession>();

// Dynamically import node-pty at runtime. This avoids emitting `require()` in
// ESM-built files and prevents Vite from statically analyzing the native
// `.node` binary.
export async function createTerminal(id: string, cwd?: string) {
  const homeDir = os.homedir();

  // Import CJS native module dynamically; the default export contains the
  // module.exports for CJS packages when imported via dynamic import.
  const mod = await import("node-pty");
  const pty: any = (mod && (mod as any).default) || mod;

  const ptyProcess: IPty = pty.spawn(id, [], {
    name: "xterm-color",
    cols: 80,
    rows: 24,
    cwd: cwd ?? homeDir,
    env: process.env,
  });

  terminals.set(id, { pty: ptyProcess });

  return ptyProcess;
}

export function getTerminal(id: string) {
  return terminals.get(id);
}

export function disposeTerminal(id: string) {
  const term = terminals.get(id);
  if (!term) return;

  term.pty.kill();
  terminals.delete(id);
}
