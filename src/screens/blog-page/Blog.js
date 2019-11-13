import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Box, Typography, Paper, IconButton, Divider } from '@material-ui/core';
import { blogRoutes } from 'library/routes/backendRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import BlogHeader from '../../components/Blog/BlogHeader';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: undefined,
        }
    }

    async componentDidMount() {
        let url = window.location.href;
        url = new URL(url);
        const id = url.searchParams.get("id");
        try {
            const response = await blogRoutes.getBlog(id);
            if (response.status === 200) {
                this.setState({ blog: response.data.blog });
            }
        } catch (error) {
            //alert("Oops. Something went wrong.");            
        }

        let blog = {
            id: "5dac822716e85b15c0fc5aca",
            author: {
                profile: {
                    name: "sheesh",
                    age: 19,
                    nationality: "japanese",
                    institution: "UFCG",
                    nick: "jooj",
                    level: 0,
                    problemsSubmitted: [],
                    problemsSolved: [],
                    submissions: 0,
                    teams: [],
                    contests: [],
                    friends: []
                }
            },
            title: "bota tua carainha na janela pra tu ver",
            content: "seu fusquinha vai voltar pra casa cheio de buraco",
            comments: [
                {
                    id: "5dacdfc1d733f71fcc194a8f",
                    nick: "jooj",
                    body: "Já perdi uns 5 MotoG"
                }
            ],
            numlikes: 1,
            numdislikes: 1,
            likes: [],
            dislikes: [
                "jooj"
            ]
        }
        this.setState({ blog });
    }

    blogAuthor = () => {
        const { blog } = this.state;
        if (blog) {
            const profile = blog.author.profile;
            const author = <Typography variant='h5'>{profile.name}</Typography>;
            const nationality = <Typography>{profile.nationality}</Typography>;
            const institution = <Typography>{profile.institution}</Typography>;
            const submissions = <Typography>Submissões: {profile.submissions}</Typography>;
            const solved = <Typography>Resolvidas: {profile.problemsSolved.length}</Typography>

            const content = [author, nationality, institution, submissions, solved];
            return content;
        }
    }

    blogInit = () => {
        const { blog } = this.state;
        if (blog) {
            const likesDislikes = (
                <Box display='flex' flexDirection='column' style={{ marginTop: '2%' }}>
                    <Box><Typography>{blog.numlikes}<IconButton><FontAwesomeIcon icon={faThumbsUp} /></IconButton></Typography></Box>
                    <Box><Typography>{blog.numdislikes}<IconButton><FontAwesomeIcon icon={faThumbsDown} /></IconButton></Typography></Box>
                </Box>
            )
            const blogContent = (
                <Box display='flex' flexDirection='column' style={{ flex: 1 }}>
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
                    <Paper style={{ marginBottom: '2%' }}>
                        <Box display='flex'>
                            <Box display='flex' flexDirection='column' style={{ flex: 1 }}>
                                <Typography>{element.nick}</Typography>
                                <Typography>{element.body}</Typography>
                            </Box>
                            {element.nick === localStorage.getItem("NICKNAME") ? <IconButton>
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

    render() {
        return (
            <>
                <Header />
                <BlogHeader />
                <Container style={{ padding: 0 }}>
                    <Box display='flex' flexDirection='column'>
                        <Box display='flex' style={{ marginBottom: '2%' }}>
                            <Paper>
                                <Container>
                                    <Box display='column' textAlign='center'>
                                        {this.blogAuthor()}
                                    </Box>
                                </Container>

                            </Paper>
                            <Paper style={{ flex: 1, marginLeft: '1%' }}>
                                <Box display='flex'>
                                    {this.blogInit()}
                                </Box>
                            </Paper>

                        </Box>
                        {this.blogComments()}
                    </Box>
                </Container>

                <Footer />
            </>
        )
    }

}

export default Blog;