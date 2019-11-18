import axios from 'axios';
import { baseURL} from '../util';


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
    }

}

export default problemRoutes;