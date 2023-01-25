import express from "express";
import { compile } from "../controllers/compileController";

const router = express.Router();

router.post("/", compile);

export default router;
