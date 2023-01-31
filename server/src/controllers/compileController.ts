import fs from "fs";
import util from "util";
import path from "path";
import { Request, Response } from "express";
import { exec } from "child_process";
import { codeDir } from "../config/paths";

const execPromise = util.promisify(exec);

async function compile(req: Request, res: Response) {
  console.log(req.body);
  if (!req.body.code) {
    return res.status(400).json({ error: "No code given" });
  }
  // res.status(200).json({ message: "Received code", code: req.body.code });
  fs.writeFileSync(path.resolve(codeDir, "main.c"), req.body.code);
  const { stdout } = await execPromise(
    `docker run --rm --mount type=bind,src=${codeDir},dst=/program -w /program test`
  );

  res.status(200).json({ stdout });
}

export { compile };
