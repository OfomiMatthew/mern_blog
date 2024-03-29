import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e.message);
  });

const app = express();
app.use(express.json());
const PORT = 3600;



app.use("/api/user", userRouter);
app.use("/api/auth/", authRouter);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server error"
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});