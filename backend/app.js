import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

// Routes
app.use("/", movieRoutes);

export default app;
