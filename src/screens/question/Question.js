import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Description, Submit, Submissions, Ranking } from './components/QuestionComponents';
import problema from './mockQuestion';


class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'DESCRIÇÃO',
            problem: {}
        }
    }

    componentDidMount() {
        //Request info from backend.
        this.setState({ problem: problema.problema });
    }

    handleClick(button) {
        this.setState({ display: button });
    }

    options = () => {
        const options = ['DESCRIÇÃO', 'SUBMETER', 'SUBMISSÕES', 'RANKING', 'BLOG'];

        let content = [];
        options.forEach(e => {
            let button = (
                <Grid item style={{width:'20%'}}>
                    <Button variant='contained' onClick={() => this.handleClick(e)}>
                        {e}
                    </Button>
                </Grid>
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
                showDisplay = <Submit />;
                break;
            case 'SUBMISSÕES':
                showDisplay = <Submissions />;
                break;
            case 'RANKING':
                showDisplay = <Ranking />;
                break;
            case 'BLOG':
                showDisplay = <Redirect to='/' />;
                break
            default:
                showDisplay = <Description description={problem.descr} samples={problem.samples} />;
                break;
        }

        return showDisplay;

    }

    render() {
        const { problem } = this.state;
        let problemLevel = undefined;
        let authorName = undefined;
        let authorEmail = undefined;
        if (problem.author) {
            problemLevel = problem.level;
            authorName = problem.author.name;
            authorEmail = problem.author.email;
        }
        return (
            <>
                <Header/>
                <Container style={{padding:0}}>
                    <Grid container spacing={0} alignItems='center'>
                        <Grid item xs={2}>
                            <Paper style={{ height: '20vh' }}>
                                <Typography>
                                    Nivel: {problemLevel}
                                </Typography>
                                <Typography>
                                    Autor: {authorName}
                                </Typography>
                                <Typography>
                                    Email: {authorEmail}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={10}>
                            <Container style={{ textAlign: 'center' }}>
                                <Typography style={{ padding: '1%' }} variant='h4'>{this.state.problem.id}</Typography>
                                <Grid container spacing={2} justify='center' style={{ padding: '1%' }}>
                                    {this.options()}
                                </Grid>
                                <Container style={{ minHeight: '60vh', backgroundColor: 'green', padding: '2%' }}>
                                    {this.optionComponent()}
                                </Container>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </>
        )
    }

}

export default Question;