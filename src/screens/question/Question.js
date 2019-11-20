import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Typography, Button, Grid, Paper, Box } from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
import { Description, Submit, Submissions, Ranking } from './components/QuestionComponents';
import { problemRoutes } from 'library/routes/backendRequest';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'DESCRIÇÃO',
            problem: undefined
        }
    }

    async componentDidMount() {
        let url = window.location.href;
        url = new URL(url);
        let id = url.searchParams.get('id');
        try {
            const response = await problemRoutes.getProblem(id);
            this.setState({ problem: response.data.problem });
        } catch (error) {
            console.log(error);
        }
    }

    handleClick(button) {
        this.setState({ display: button });
    }

    options = () => {
        const options = ['DESCRIÇÃO', 'SUBMETER', 'BLOG'];

        let content = [];
        options.forEach(e => {
            let button = (
                <Button variant='contained' onClick={() => this.handleClick(e)} style={{ margin: '2%', padding: '1%', flex: 1 }}>
                    {e}
                </Button>
            );
            content.push(button);
        });
        return content;
    }

    optionComponent = () => {
        const { display, problem } = this.state;
        let showDisplay;
        switch (display) {
            case 'SUBMETER':
                showDisplay = <Submit id={problem._id} />;
                break;
            case 'SUBMISSÕES':
                showDisplay = <Submissions />;
                break;
            case 'RANKING':
                showDisplay = <Ranking />;
                break;
            case 'BLOG':
                showDisplay = <Redirect to={`/blog/search?title=${problem.title}`} />;
                break
            default:
                showDisplay = <Description description={problem.description} samples={problem.samples} />;
                break;
        }

        return showDisplay;

    }

    questionTags = (tags) => {
        let content = []
        tags.forEach(element => {
            let tag = (
                <Grid item>
                    <Paper>
                        {element}
                    </Paper>
                </Grid>
            )
            content.push(tag);

        });

        return content;
    }

    render() {
        const { problem } = this.state;
        let title;
        let author;
        let level;
        let createdAt;
        let lastUpdate;
        let tags;
        if (problem) {
            title = problem.title;
            author = problem.author;
            level = problem.level;
            tags = problem.tags;

            createdAt = new Date(problem.createdAt).toLocaleDateString();
            lastUpdate = new Date(problem.updatedAt).toLocaleDateString();
        }

        return (
            <>
                <Header />
                <Container style={{ padding: 0, paddingTop: '1%' }}>
                    <Box display='flex' textAlign='center'>
                        <Box display='flex' flexDirection='column'>
                            <Paper style={{ padding: '2%', width: '30vh' }}>
                                <Link to={`/profile/player?=${author}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    <Typography variant='h6' style={{ paddingBottom: '10%' }}>
                                        Autor: {author}
                                    </Typography>
                                </Link>
                                <Typography>
                                    Criado em: {createdAt}
                                </Typography>
                                <Typography>
                                    Última att: {lastUpdate}
                                </Typography>
                            </Paper>
                            <Paper style={{ padding: '2%', marginTop: '10%', width: '30vh' }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant='h6'>Tags</Typography>
                                    </Grid>
                                    {problem ? this.questionTags(tags) : undefined}
                                </Grid>
                            </Paper>
                        </Box>
                        <Box display='flex' flexDirection='column' style={{ flex: 1 }}>
                            <Container>
                                <Paper>
                                    <Box display='flex' flexDirection='column'>
                                        <Typography style={{ padding: '1%', flex: 1 }} variant='h3'>{title}</Typography>
                                        <Typography variant='h5' style={{ padding: '1%', alignSelf: 'flex-end' }}>Level {level}</Typography>

                                    </Box>
                                </Paper>
                                <Box display='flex' justifyContent='space-evenly'>
                                    {this.options()}
                                </Box>
                                <Paper style={{ minHeight: '60vh', padding: '2%', marginBottom: '2%', backgroundColor: 'f4f6f6' }}>
                                    {problem ? this.optionComponent() : undefined}
                                </Paper>
                            </Container>
                        </Box>
                    </Box>
                </Container>
                <Footer />
            </>
        )
    }

}

export default Question;