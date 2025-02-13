import express from "express";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";

// Loads variables from .env into process.env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.use("/", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
