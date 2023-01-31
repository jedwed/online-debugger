import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const rootDir = path.resolve(__dirname, "..", "..");
const codeDir = path.resolve(rootDir, "code");
const hostCodeDir = path.resolve(process.env.HOST_DIR as string, "code");

export { rootDir, codeDir, hostCodeDir };
