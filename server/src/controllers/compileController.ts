import fs from "fs";
import util from "util";
import path from "path";
import { Request, Response } from "express";
import { exec } from "child_process";
import { codeDir, hostCodeDir } from "../config/paths";

const execPromise = util.promisify(exec);

async function compile(req: Request, res: Response) {
  if (!req.body.code) {
    return res.status(400).json({ error: "No code given" });
  }
  fs.writeFileSync(path.resolve(codeDir, "main.c"), req.body.code);
  try {
    const { stdout } = await execPromise(
      `docker run --rm --mount type=bind,src=${hostCodeDir},dst=/program -w /program compiler`
    );

    res.status(200).json({ stdout });
  } catch (error) {
    res.status(400).json(error);
  }
}

export { compile };
