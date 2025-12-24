import { dialog, ipcMain } from "electron";
import { ReadDirEntry, RootPath } from "electron/shared/ipc";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

ipcMain.handle("project:open", async (): Promise<RootPath | null> => {
  const result = await dialog.showOpenDialog({ properties: ["openDirectory"] });
  if (result.canceled || result.filePaths.length === 0) return null;
  return { path: result.filePaths[0] };
});

ipcMain.handle(
  "project:readDir",
  async (_, dirPath: string): Promise<ReadDirEntry[]> => {
    const entries = await readdir(dirPath, { withFileTypes: true });
    const data = entries?.map((entry) => ({
      id: entry.name,
      name: entry.name,
      path: path.join(dirPath, entry.name),
      isDirectory: entry.isDirectory(),
    }));
    return data;
  }
);

ipcMain.handle("file:open", async (_, filePath: string): Promise<string> => {
  const result = await readFile(filePath, "utf-8");
  return result;
});
