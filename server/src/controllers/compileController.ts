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
  const newDir = path.resolve(codeDir, uuidv4());
  await fs.mkdir(newDir);
  await fs.writeFile(path.resolve(newDir, `main.c`), req.body.code);

  // const timer = setTimeout(() => {
  //   execPromise(`docker kill ${container}`);
  // }, 5000);

  try {
    const { stdout } = await execPromise(`gcc -ggdb main.c -o main && ./main`, {
      cwd: newDir,
    });
    const child = spawn('gdb', ['main'], { cwd: newDir });
    child.stdin.write(`source ${path.resolve(codeDir, 'debug.py')}`);
    child.stdin.end();
    await new Promise((resolve) => child.on('exit', resolve));
    const debug = await fs.readFile(path.resolve(newDir, 'debug.json'), 'utf8');
    // clearTimeout(timer);
    await fs.rm(newDir, { recursive: true, force: true });
    res.status(200).json({ stdout, debug: JSON.parse(debug) });
  } catch (error) {
    await fs.rm(newDir, { recursive: true, force: true });
    res.status(400).json(error);
  }
}

export { compile };
