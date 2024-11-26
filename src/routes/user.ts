import express from "express";
const router = express.Router();
router.get("/", async (req, res) => {
  res.json("Hello world");
});

export default router;
