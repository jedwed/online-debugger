import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import util from "util";
import path from "path";
import { Request, Response } from "express";
import { exec } from "child_process";
import { codeDir } from "../config/paths";

const execPromise = util.promisify(exec);

async function compile(req: Request, res: Response) {
  if (!req.body.code) {
    return res.status(400).json({ error: "No code given" });
  }
  const newFile = uuidv4();
  fs.writeFileSync(path.resolve(codeDir, `${newFile}.c`), req.body.code);

  // const timer = setTimeout(() => {
  //   execPromise(`docker kill ${container}`);
  // }, 5000);

  try {
    const { stdout } = await execPromise(
      `cd ${codeDir} && gcc -ggdb ${newFile}.c -o ${newFile} && ./${newFile}`
    );
    execPromise(`cd ${codeDir} && rm ${newFile}.c ${newFile}`);
    // clearTimeout(timer);
    res.status(200).json({ stdout });
  } catch (error) {
    execPromise(`cd ${codeDir} && rm ${newFile}.c ${newFile}`);
    res.status(400).json(error);
  }
}

export { compile };
