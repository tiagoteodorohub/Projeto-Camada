import userService from "../services/userService.js";
import User from "../models/Users.js"; 

const userController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await userService.recuperarUsuarios();

            res.status(200).json({
                message: "Usuários recuperados com sucesso!",
                data: resultado
            });
        } catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar usuários!",
                data: error.message
            });
        }
    }, 

    criar: async (req, res) => {
        try {
            
            const { name, email, password } = req.body;            
            const user = new User(name, email, password, null); 
            const resultado = await userService.criarUsuario(user);

          
            return res.status(201).json({
                message: "Usuário criado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);
            
            return res.status(500).json({
                message: "Erro ao criar o usuário!",
                data: error.message
            });
        }
    }
};

export default userController;