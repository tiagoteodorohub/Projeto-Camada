import { Router } from "express";
import userController from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.get ("/", userController.selecionar);
userRoutes.post ("/", userController.criar);
userRoutes.delete ("/:id", userController.deletar);
userRoutes.put("/:id", userController.atualizar);

export default userRoutes;
