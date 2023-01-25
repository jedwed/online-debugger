import { Request, Response } from "express";

function compile(req: Request, res: Response) {
  console.log(req.body);
  res.status(200).json({ message: "Received code", code: req.body.code });
}

export { compile };
