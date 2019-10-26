import {baseURL} from './backendRequest';
import axios from 'axios';
import TOKEN from '../token';

const userRoutes = {
    userRoute: baseURL + '/player',
    loginRoute: this.userRoute + '/login',
    signupRoute: this.userRoute + '/signup',
    forgetPasswordRoute: this.userRoute + '/forgetpassword',
    myProfileRoute: this.userRoute + '/me',
    logoutRoute: this.profileRoute + '/logout',
    logoutAllRoute: this.profileRoute + '/logoutall',
    imageUploadRoute: this.profileRoute + '/image',
    changePasswordRoute: this.profileRoute + '/password',
    friendRoute: this.userRoute + '/friend',
    searchPlayer: this.userRoute + '/search',

    headers = {
        Authorization,
    }


    login = async (user) => {
        const response = await axios.post(this.loginRoute, user);
        return response;
    },

    signup = async (user) => {
        const response = await axios.post(this.signupRoute, user);
        return response;
    },

    forgetPassword = async (email) => {
        const response = await axios.post(this.forgetPasswordRoute, {email});
        return response;
    },

    getMyProfile = async () =>{
        localStorage.getItem(TOKEN);

    },

    updateMyProfile = async () => {
        localStorage.getItem(TOKEN);
    },

    logout = async () => {
        localStorage.getItem(TOKEN);
    },
    
    logoutAll = async () => {
        localStorage.getItem(TOKEN);
    },

    uploadImage = async () => {
        localStorage.getItem(TOKEN);
    },

    changePassword = async () => {
        localStorage.getItem(TOKEN);
    },

    getProfile = async (nick) => {
        const response = await axios.get(this.userRoute + '/', {
            params: {
                nick
            }
        });
        return response;
    },

    addFriend = async () => {
        localStorage.getItem(TOKEN);
    },

    deleteFriend = async () => {
        localStorage.getItem(TOKEN);
    },

    searchPlayer = async (substring) => {
        const response = await axios.get(this.searchPlayer + '/', {
            params: {
                substring
            }
        });
        return response;
    },

}

export default userRoutes;