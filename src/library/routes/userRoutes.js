import { baseURL } from './backendRequest';
import axios from 'axios';
import TOKEN from '../token';


const headers = {
    'Authorization': localStorage.getItem(TOKEN),
};

const userRoutes = {
    /**
     * Rotas relacionadas ao usuário.
     */
    userRoute: baseURL + '/player',
    loginRoute: this.userRoute + '/login',
    signupRoute: this.userRoute + '/signup',
    forgetPasswordRoute: this.userRoute + '/forgetpassword',
    myProfileRoute: this.userRoute + '/me',
    logoutRoute: this.myProfileRoute + '/logout',
    logoutAllRoute: this.myProfileRoute + '/logoutall',
    imageUploadRoute: this.myProfileRoute + '/image',
    changePasswordRoute: this.myProfileRoute + '/password',
    friendRoute: this.userRoute + '/friend',
    searchPlayer: this.userRoute + '/search',

    /**
     * Rota para o login de um usuário.
     * @param {JSON} user JSON com atributo player, que contém um json com email ou nick, e senha.
     * @returns {JSON} JSON com token.
     */
    async login(user) {
        const response = await axios.post(this.loginRoute, user);
        return response;
    },

    /**
     * Rota para cadastro de um usuário.
     * @param {JSON} user JSON com player, que contém um json com email, nick e senha.
     * @returns {JSON} JSON com player e token. 
     */
    async signup(user) {
        const response = await axios.post(this.signupRoute, user);
        return response;
    },

    /**
     * Rota para requisitar uma nova senha, caso tenha sido esquecida.
     * @param {JSON} user JSON com player, que contém um json com email.
     * @returns {JSON} com message.
     */
    async forgetPassword(user) {
        const response = await axios.post(this.forgetPasswordRoute,user);
        return response;
    },

    /**
     * Rota para adquirir o perfil do usuário que está logado.
     * @returns {JSON} conténdo o perfil do usuário.
     */
    async getMyProfile() {
        const response = await axios.get(this.myProfileRoute, headers);
        return response;
    },

    /**
     * 
     * @param {JSON} updates JSON com updates, que é um JSON com name, age, nationality e institution (opcionais). 
     * @returns {JSON} JSON com message
     */
    async updateMyProfile(updates) {
        const response = await axios.post(this.myProfileRoute, updates, headers);
        return response;
    },

    /**
     * Remove o token de um usuário.
     * @returns {JSON}
     */
    async logout() {
        const response = await axios.post(this.logoutRoute, headers);
        return response;
    },

    /**
     * TODO
     */
    async logoutAll() {
        const response = await axios.post(this.logoutAllRoute, headers);
        return response;
    },
    
    /**
     * Faz upload de uma imagem para o perfil do usuário.
     * @param {FormData} image FormData com imagem a ser enviada.
     */
    async uploadImage(image) {
        const h = {
            'Authorization': headers.Authorization,
            'content-type': 'multipart/form-data'
        };
        const response = await axios.post(this.imageUploadRoute, image, h);
        return response;
    },

    /**
     * Rota para troca de uma senha do usuário.
     * @param {JSON} updates JSON com current_password e new_password.
     * @returns {JSON} com message caso tenha sucesso ou error.
     */
    async changePassword(updates) {
        const response = await axios.post(this.changePasswordRoute, updates, headers);
        return response;
    },

    /**
     * Rota para adquirir o perfil de um usuário através de seu nick.
     * @param {string} nick Nickname do usuário a adquirir o perfil.
     * @returns {JSON} conténdo o perfil do usuário caso seja achado ou um error.
     */
    async getProfile(nick) {
        const response = await axios.get(this.userRoute + '/', {
            params: {
                nick
            }
        });
        return response;
    },

    /**
     * Rota para adicionar um usuário aos amigos através de seu nick.
     * @param {JSON} friend JSON com friend, que é o nick do amigo a ser adicionado.
     * @returns {JSON}
     */
    async addFriend(friend) {
        const response = await axios.post(this.friendRoute, friend, headers);
        return response;
    },

    /**
     * Rota para deletar um usuário dos amigos através de seu nick.
     * @param {JSON} friend JSON com friend, que é o nick do amigo a ser deletado.
     * @returns {JSON}
     */
    async deleteFriend(friend) {
        const response = await axios.delete(this.friendRoute, friend, headers);
        return response;
    },

    /**
     * Rota para procurar um player através do nick.
     * @param {string} substring parte do nick a ser procurado.
     * @returns {JSON} JSON conténdo message (quantidade de resultados encontrados) e results.
     */
    async searchPlayer(substring) {
        const response = await axios.get(this.searchPlayer + '/', {
            params: {
                substring
            }
        });
        return response;
    },

}

export default userRoutes;