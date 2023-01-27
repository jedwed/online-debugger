// import util from "util";
// import path from "path";
import { Request, Response } from "express";
// import { exec } from "child_process";

// const execPromise = util.promisify(exec);

async function compile(req: Request, res: Response) {
  console.log(req.body);
  res.status(200).json({ message: "Received code", code: req.body.code });
  // const currDir = path.resolve(__dirname, "temp");
  // const { stdout } = await execPromise(
  //   `docker run --mount type=bind,src=${currDir}/temp,dst=/program -w /program test`
  // );
  // res.status(200).json({ stdout, currDir });
}

export { compile };
