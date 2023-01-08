import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("lord help us it's gonna be a long long journey");
});

export default router;
