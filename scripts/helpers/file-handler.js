import fs from "fs/promises";
import mime from "mime";

export const readFile = async (path) => ({file: await fs.readFile(path), name: path.basename(path), type: mime.getType(path)})

export const writeFile = async (path, data) => await fs.writeFile(path, data)