import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import connectDB from "./config/db.js";

const app = express();

// Connect to database
connectDB();

// Routes
app.use("/", movieRoutes);

export default app;
