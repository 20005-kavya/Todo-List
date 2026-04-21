import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import todoRoutes from "./src/routes/todoRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// routes
app.use("/todos", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running...");
});