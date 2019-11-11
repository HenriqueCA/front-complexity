import axios from 'axios';
import {TOKEN, baseURL} from '../util';


const headers = {
    'Authorization': localStorage.getItem(TOKEN),
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

    async getBlog(blogId){
        const response = await axios.get(this.blogRoute, {
            params: {
                blogId
            }
        }, headers);
        return response;
    },
    
    async createBlog(title,body){
        const blog = {
            title,
            body
        }
        const response = await axios.post(this.createBlogRoute, blog, headers);
        return response;
    },

    async likeBlog(blogId){
        const response = await axios.post(this.blogRoute + blogId + '/')
    }
}

export default blogRoutes;