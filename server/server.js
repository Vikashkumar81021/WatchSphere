import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authroutes from "./routes/auth-routes.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:5173", // The Vite frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authroutes);
connectDB();
app.listen(PORT, () => {
  console.log(`Server is listen at ${PORT}`);
});
