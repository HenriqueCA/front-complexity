import axios from 'axios';
import { TOKEN, baseURL } from '../util';


const headers = {
    Authorization: localStorage.getItem(TOKEN),
};

/**
 * Rotas relacionadas ao blog.
 */
const blogRoutes = {

    blogRoute: baseURL + '/blog/',
    createBlogRoute: baseURL + '/blog/create/',
    listByTimeRoute: baseURL + '/blog/sort/time/',
    listByLikeRoute: baseURL + '/blog/sort/likes/',
    searchByTitleRoute: baseURL + '/blog/search/title/',
    searchByBodyRoute: baseURL + '/blog/search/body/',
    searchByAuthorRoute: baseURL + '/blog/search/author/',
    likeBlogRoute: '/like/',
    dislikeBlogRoute: '/dislike/',
    commentBlogRoute: '/comment/',

    /**
     * Faz uma requisição retornando um blog.
     * @param {string} blogId o id do blog.
     */
    async getBlog(blogId) {
        const response = await axios.get(this.blogRoute + blogId, { headers });
        return response;
    },

    /**
     * Faz uma requisição para criação de um blog.
     * @param {string} title titulo do blog.
     * @param {string} body corpo do blog.
     */
    async createBlog(title, body) {
        const blog = {
            title,
            body
        }
        const response = await axios.post(this.createBlogRoute, {blog}, { headers });
        return response;
    },

    /**
     * Faz uma requisição para dar um like em algum blog.
     * @param {string} blogId o id do blog.
     */
    async likeBlog(blogId) {
        const response = await axios.post(this.blogRoute + blogId + this.likeBlogRoute, { headers });
        return response;
    },

    /**
     * Faz uma requisição para dar um deslike em algum blog.
     * @param {string} blogId o id do blog.
     */
    async dislikeBlog(blogId) {
        const response = await axios.post(this.blogRoute + blogId + this.dislikeBlogRoute, { headers });
        return response;
    },

    /**
     * Faz uma requisição para realizar um comentário em algum blog.
     * @param {string} blogId o id do blog.
     */
    async commentBlog(blogId, comment) {
        const response = await axios.post(this.blogRoute + blogId + this.commentBlogRoute, { comment }, { headers });
        return response;
    },

    /**
     * Faz uma requisição para remover o comentário de algum blog.
     * @param {string} blogId o id do blog.
     * @param {string} commentId o id do comentário
     */
    async removeComment(blogId, commentId) {
        const response = await axios.delete(this.blogRoute + blogId + this.commentBlogRoute + commentId, { headers });
        return response;
    },

    /**
     * Faz uma requisição para retornar uma lista de blogs ordenada por tempo. O mais antigo vem primeiro.
     */
    async listByTime() {
        const response = await axios.get(this.listByTimeRoute, { headers });
        return response;
    },

    /**
     * Faz uma requisição para retornar uma lista de blogs ordenada por likes. O que possui mais likes vem primeiro.
     */
    async listByLike() {
        const response = await axios.get(this.listByLikeRoute, { headers });
        return response;
    },

    /**
     * Faz uma requisição para retornar um blog a partir de uma substring do titulo do blog.
     * @param {string} pattern padrão a ser procurado.
     */
    async searchByTitle(pattern) {
        const response = await axios.get(this.searchByTitleRoute + pattern, { headers });
        return response;
    },

    /**
     * Faz uma requisição para retornar um blog a partir de uma substring do autor do blog.
     * @param {string} nick padrão a ser procurado.
     */
    async searchByAuthor(nick) {
        const response = await axios.get(this.searchByAuthorRoute + nick, { headers });
        return response;
    },

    /**
     * Faz uma requisição para retornar um blog a partir de uma substring do corpo do blog.
     * @param {string} pattern padrão a ser procurado.
     */
    async searchByBody(pattern) {
        const response = await axios.get(this.searchByBodyRoute + pattern, { headers });
        return response;
    }
}

export default blogRoutes;