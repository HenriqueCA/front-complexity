import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Box, Typography, Paper, IconButton, Divider, TextField, Button } from '@material-ui/core';
import { blogRoutes } from 'library/routes/backendRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import BlogHeader from '../../components/Blog/BlogHeader';
import styles from './Blog.css.js';
import { Link } from 'react-router-dom';
import { NICKNAME } from 'library/util';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: undefined,
            liked: false,
            disliked: false,
            comment: '',
        }
    }

    async componentDidMount() {
        let url = window.location.href;
        url = new URL(url);
        const id = url.searchParams.get("id");
        try {
            const response = await blogRoutes.getBlog(id);
            this.setState({ blog: response.data.blog });
            this.defineLikeAndDislike(response.data.blog);
        } catch (error) {
            console.log(error);
            //TODO: Handle Error.
        }
    }

    defineLikeAndDislike = (blog) => {
        const nickname = localStorage.getItem(NICKNAME);
        let liked = blog.likes.includes(nickname);
        let disliked = blog.dislikes.includes(nickname);
        this.setState({ liked, disliked });
    }

    blogAuthor = () => {
        const { blog } = this.state;
        if (blog) {
            const profile = blog.author.profile;
            const author = <Link style={styles.profileLinks} to={`/profile/?user=${profile.name}`}><Typography variant='h5'>{profile.name}</Typography> </Link>;
            const nationality = <Typography>{profile.nationality}</Typography>;
            const institution = <Typography>{profile.institution}</Typography>;
            const submissions = <Typography>Submissões: {profile.submissions}</Typography>;
            const solved = <Typography>Resolvidas: {profile.problemsSolved.length}</Typography>

            const content = [author, nationality, institution, submissions, solved];
            return content;
        }
    }

    blogInit = () => {
        const { blog, liked, disliked } = this.state;
        if (blog) {
            const likesDislikes = (
                <Box display='flex' flexDirection='column' style={styles.iconsContainer}>
                    <Box><Typography>{blog.numlikes}<IconButton style={liked ? styles.hasLikedIcon : styles.notLikedIcon} onClick={() => { this.likeComment(blog.id) }}><FontAwesomeIcon icon={faThumbsUp} /></IconButton></Typography></Box>
                    <Box><Typography>{blog.numdislikes}<IconButton style={disliked ? styles.hasDislikedIcon : styles.notDislikedIcon} onClick={() => { this.dislikeComment(blog.id) }}><FontAwesomeIcon icon={faThumbsDown} /></IconButton></Typography></Box>
                </Box>
            )
            const blogContent = (
                <Box display='flex' flexDirection='column' style={styles.blogContent}>
                    <Typography variant='h4'>{blog.title}</Typography>
                    <Divider />
                    <Typography>{blog.content}</Typography>
                </Box>
            )

            const content = [likesDislikes, blogContent];
            return content;

        }

    }

    blogComments = () => {
        const { blog } = this.state;
        if (blog) {
            let content = []
            blog.comments.forEach(element => {
                let comment = (
                    <Paper style={styles.comments}>
                        <Box display='flex'>
                            <Box display='flex' flexDirection='column' style={styles.commentContent}>
                                <Link style={styles.profileLinks} to={`/profile/?user=${element.nick}`}><Typography variant='h6'>{element.nick}</Typography></Link>
                                <Typography>{element.body}</Typography>
                            </Box>
                            {element.nick === localStorage.getItem(NICKNAME) ? <IconButton style={styles.trashIcon} onClick={() => { this.removeComment(blog.id, element.id) }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </IconButton> : undefined}
                        </Box>
                    </Paper>
                )

                content.push(comment);
            })

            return content;
        }

    }

    likeComment = async (blogId) => {
        try {
            await blogRoutes.likeBlog(blogId);
            let { liked, disliked, blog } = this.state;
            if (liked) {
                liked = false;
                blog.numlikes--;

            }
            else {
                liked = true;
                blog.numlikes++;
            }
            if (disliked) {
                disliked = false;
                blog.numdislikes--;
            }
            this.setState({ liked, disliked, blog });
        } catch (error) {
            console.log(error);
            //TODO: Handle Error.
        }
    }

    dislikeComment = async (blogId) => {
        try {
            await blogRoutes.dislikeBlog(blogId);
            let { liked, disliked, blog } = this.state;
            if (disliked) {
                disliked = false;
                blog.numdislikes--;
            }
            else {
                disliked = true;
                blog.numdislikes++;
            }
            if (liked) {
                liked = false;
                blog.numlikes--;
            }
            this.setState({ liked, disliked, blog });
        } catch (error) {
            console.log(error);
            //TODO: Handle Error.
        }

    }

    removeComment = async (blogId, commentId) => {
        try {
            await blogRoutes.removeComment(blogId, commentId);
            const { blog } = this.state;
            const comments = blog.comments;
            for (let i = 0; i < comments.length; i++) {
                if (comments[i].id === commentId) {
                    comments.splice(i, 1);
                    break;
                }

            }

            this.setState({ blog });
        } catch (error) {
            console.log(error);
            //TODO: Handle Error
        }
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    }

    submitComment = async () => {
        let { blog, comment } = this.state;
        if (comment.length >= 5) {

            try {
                await blogRoutes.commentBlog(blog.id, comment);
                const getBlog = await blogRoutes.getBlog(blog.id);
                this.setState({ blog: getBlog.data.blog });
                comment = '';
                this.setState({ comment });
            } catch (error) {
                console.log(error);
                //TODO: Handle Error.

            }
        } else {
            alert("Seu comentário precisa ter pelo menos 5 caracteres");
        }
    }

    render() {
        return (
            <>
                <Header />
                <BlogHeader />
                <Container style={styles.mainContainer}>
                    <Box display='flex' flexDirection='column'>
                        <Box display='flex' style={styles.initBlogContainer}>
                            <Paper>
                                <Container>
                                    <Box display='column' textAlign='center'>
                                        {this.blogAuthor()}
                                    </Box>
                                </Container>
                            </Paper>
                            <Paper style={styles.blogContainer}>
                                <Box display='flex'>
                                    {this.blogInit()}
                                </Box>
                            </Paper>
                        </Box>
                        <Paper style={styles.createCommentContainer}>
                            <Box display='flex'>
                                <TextField fullWidth multiline rows={2} label='Comente' inputProps={{ maxLength: 250 }} onChange={this.handleChange} value={this.state.comment} />
                                <Button style={styles.commentButton} onClick={this.submitComment}>Comentar</Button>
                            </Box>
                        </Paper>
                        {this.blogComments()}
                    </Box>
                </Container>

                <Footer />
            </>
        )
    }

}

export default Blog;