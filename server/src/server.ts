import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";
import chalk from "chalk";
import util from "util";
import { exec } from "child_process";
import * as dotenv from "dotenv";
import compileRoute from "./routes/compileRoute";
import { codeDir } from "./config/paths";

dotenv.config();

const execPromise = util.promisify(exec);

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/compile", compileRoute);

execPromise(
  `docker build -t compiler ${path.resolve(__dirname, "compiler")}`
).then(() => {
  if (!fs.existsSync(codeDir)) {
    fs.mkdirSync(codeDir);
  }
  app.listen(port, () => {
    console.log(chalk.cyan(`Server listening at port ${port} 🚀`));
  });
});
