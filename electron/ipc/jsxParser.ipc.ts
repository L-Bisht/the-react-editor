import { parse } from "@babel/parser";
import { ipcMain } from "electron";
import { readFile } from "node:fs/promises";
import { JSXElement } from "@babel/types";
import traverse from "@babel/traverse";
ipcMain.handle(
  "jsx:parse-file",
  async (_, filePath: string): Promise<JSXElement | null> => {
    const code = await readFile(filePath, "utf-8");
    const ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    let rootJSX: JSXElement | null = null;
    traverse(ast, {
      JSXElement(path) {
        rootJSX = path.node;
        path.stop();
      },
    });

    return rootJSX;
  }
);
