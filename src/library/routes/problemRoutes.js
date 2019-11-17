import axios from 'axios';
import {TOKEN, baseURL} from '../util';


/**
 * Rotas relacionadas aos problemas.
 */
const problemRoutes = {

    problemRoute: baseURL + '/problem/',

    async getProblem(id) {
        const response = await axios.get(this.problemRoute + id);
        return response; 
    }

}

export default problemRoutes;