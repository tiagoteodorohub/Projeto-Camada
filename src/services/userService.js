import userRepository from "../repositories/userRepository.js";

const userService = {
    recuperarUsuarios: async () => {
        const resultado = await userRepository.selecionar();
        return resultado;
    },

    recuperarUsuarioPorId: async (userId) => {
        const resultado = await userRepository.selecionarPorId(userId);
        return resultado;
    },

    criarUsuario: async (user) => {
        const resultado = await userRepository.criar(
            user.name,
            user.email,
            user.password
        );
        return resultado;
    },

    atualizarUsuario: async (user) => {
        const resultado = await userRepository.atualizar(
            user.name,
            user.email,
            user.password,
            user.id
        );
        return resultado;
    },

    deletarUsuario: async (userId) => {
        const resultado = await userRepository.deletar(userId);
        return resultado;
    }
};

export default userService;