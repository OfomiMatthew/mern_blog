import express from "express";
import {Test} from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.get("/test", Test);

export default userRouter;
