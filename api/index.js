import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log('database connected')
})
.catch((e)=>{
  console.log(e.message)
})

const app = express();
const PORT = 3600;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
