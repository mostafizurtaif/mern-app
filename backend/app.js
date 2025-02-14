import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import connectDB from "./config/db.js";

// Connect to database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/", movieRoutes);

export default app;
