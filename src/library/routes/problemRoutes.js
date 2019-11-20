import axios from 'axios';
import { baseURL, TOKEN } from '../util';


const headers = {
    Authorization: localStorage.getItem(TOKEN),
};


/**
 * Rotas relacionadas aos problemas.
 */
const problemRoutes = {

    problemRoute: baseURL + '/problem/',

    async getProblem(id) {
        const response = await axios.get(this.problemRoute + id);
        return response; 
    },

    async getProblems(params){
        const response = await axios.get(this.problemRoute, {params});
        return response;
    },

    async submitProblem(id, formdata){
        const response = await axios.post(this.problemRoute + id, formdata, {headers});
        return response;
    }

}

export default problemRoutes;