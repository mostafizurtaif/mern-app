import { Router } from "express";
import { createMovie } from "../controllers/movieController.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

router.post("/", createMovie);

export default router;
