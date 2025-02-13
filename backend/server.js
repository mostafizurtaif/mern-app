import dotenv from "dotenv";
import app from "./app.js";

// Loads variables from .env into process.env
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
