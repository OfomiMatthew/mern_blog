import user from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import {errorHandler} from "../utils/error.js";
export const Signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400,"All fields are required"))
    // return res.status(400).json({ message: "All fields are required" });
  }
  const hashPassword = bcryptjs.hashSync(password,10)
  const newUser = new user({
    username,
    email,
    password:hashPassword,
  });
  try{
    const data = await newUser.save();
    res.status(201).json({message:"User created",data:data})
  }
  catch(e){
 next(e) // middleware error
  }

};
