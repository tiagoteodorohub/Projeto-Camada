import { Router } from "express";
import userController from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.get ("/", userController.selecionar);
userRoutes.post ("/", userController.criar);

export default userRoutes;
