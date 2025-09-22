import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("DB Error:", err));

// Test route
app.get("/", (req, res) => res.send("API running"));

// ✅ Routes mount must come before listen
app.use("/api/events", eventRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
