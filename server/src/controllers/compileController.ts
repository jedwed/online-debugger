import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import util from 'util';
import path from 'path';
import { Request, Response } from 'express';
import { exec, spawn } from 'child_process';
import { codeDir } from '../config/paths';

const execPromise = util.promisify(exec);

async function compile(req: Request, res: Response) {
  if (!req.body.code) {
    return res.status(400).json({ error: 'No code given' });
  }
  const newFile = uuidv4();
  await fs.writeFile(path.resolve(codeDir, `${newFile}.c`), req.body.code);

  // const timer = setTimeout(() => {
  //   execPromise(`docker kill ${container}`);
  // }, 5000);

  try {
    const { stdout } = await execPromise(
      `gcc -ggdb ${newFile}.c -o ${newFile} && ./${newFile}`,
      { cwd: codeDir }
    );
    const child = spawn('gdb', [newFile], { cwd: codeDir });
    child.stdin.write(`source debug.py`);
    child.stdin.end();
    await new Promise((resolve) => child.on('exit', resolve));
    const debug = await fs.readFile(`${codeDir}/debug.json`, 'utf8');
    // clearTimeout(timer);
    execPromise(`rm ${newFile}.c ${newFile} debug.json`, { cwd: codeDir });
    res.status(200).json({ stdout, debug: JSON.parse(debug) });
  } catch (error) {
    execPromise(`rm -f ${newFile}.c ${newFile}`, { cwd: codeDir });
    res.status(400).json(error);
  }
}

export { compile };
