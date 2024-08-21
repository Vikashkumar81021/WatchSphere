import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authroutes from "./routes/auth-routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authroutes);
connectDB();
app.listen(PORT, () => {
  console.log(`Server is listen at ${PORT}`);
});
