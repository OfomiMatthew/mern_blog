import user from "../models/userModel.js";
export const Signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newUser = new user({
    username,
    email,
    password,
  });
  try{
    const data = await newUser.save();
    res.status(201).json({message:"User created",data:data})
  }
  catch(e){
    res.status(500).json({message:e.message})
  }

};
