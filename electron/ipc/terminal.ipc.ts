import { ipcMain } from "electron";
import { platform } from "node:os";
import { TerminalShell } from "electron/shared/ipc";
import { existsSync } from "node:fs";
import { LINUX_TERMINALS, WINDOW_TERMINALS } from "../shared/terminalConstants";
import {
  createTerminal,
  disposeTerminal,
  getTerminal,
} from "electron/utils/terminalManger";
/* import * as pty from "node-pty";
import os from "node:os"; */

ipcMain.handle("terminal:list-shells", (): TerminalShell[] => {
  const shells: TerminalShell[] = [];
  const os = platform();
  const candidates = os === "win32" ? WINDOW_TERMINALS : LINUX_TERMINALS;

  for (const shell of candidates) {
    if (existsSync(shell.path)) {
      shells.push({ ...shell, isDefault: shells.length === 0 });
    }
  }

  return shells;
});

ipcMain.handle(
  "terminal:create",
  async (_, { shellId, cwd }: { shellId: string; cwd: string }) => {
    const ptyProcess = await createTerminal(shellId, cwd);
    ptyProcess.onData((data: string) => {
      _.sender.send(`terminal:data:${shellId}`, data);
    });
  }
);

ipcMain.on(
  "terminal:write",
  (_, { id, data }: { id: string; data: string }) => {
    const term = getTerminal(id);
    term?.pty?.write(data);
  }
);

ipcMain.handle("terminal:dispose", (_, id: string) => {
  disposeTerminal(id);
});

/* type TerminalSession = {
  pty: pty.IPty;
};

const terminals = new Map<string, TerminalSession>();

function createTerminal(id: string, cwd?: string) {
  const homeDir = os.homedir();

  const ptyProcess = pty.spawn(id, [], {
    name: "xterm-color",
    cols: 80,
    rows: 24,
    cwd: cwd ?? homeDir,
    env: process.env,
  });

  terminals.set(id, { pty: ptyProcess });

  return ptyProcess;
}

function getTerminal(id: string) {
  return terminals.get(id);
}

function disposeTerminal(id: string) {
  const term = terminals.get(id);
  if (!term) return;

  term.pty.kill();
  terminals.delete(id);
}
 */
