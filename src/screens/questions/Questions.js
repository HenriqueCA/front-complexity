import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Paper, TextField, Box, MenuItem, Typography, Button, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import problemRoutes from '../../library/routes/problemRoutes';

class Questions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            problems: [],
            title: '',
            tags: [],
            nivel: 0,
        };

    }

    async componentDidMount() {
        this.searchProblems();
    }


    handleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    handleNivelChange = (event) => {
        this.setState({ nivel: event.target.value });
    }


    handleTagChange = (event) => {
        let tags = event.target.value.split(" ");
        this.setState({ tags: tags });
    }

    menuItems = () => {
        let content = [];
        for (let i = 0; i < 10; i++) {
            let item = (
                <MenuItem value={i} key={i}>{i === 0 ? 'Todos' : i}</MenuItem>
            )
            content.push(item);

        }
        return content;

    }

    tags = (tagsList) => {
        let content = [];

        tagsList.forEach(element => {
            let tag = (
                <Typography style={{ padding: '1%' }}>{element}</Typography>
            );
            content.push(tag);
        });

        return content;
    }

    listProblems = () => {
        const { problems } = this.state;
        let content = [];
        problems.forEach(element => {
            let problem = (
                <Button variant='contained' fullWidth style={{ padding: 0, textTransform: 'none', marginTop: '0.5%' }} href={`/problem/?id=${element._id}`}>
                    <Container>
                        <Box display='flex' alignContent='flex-start' alignItems='flex-start' justifyContent='flex-start' justifyItems='flex-start'>
                            <Typography style={{ padding: '1%' }}>Nível {element.level} -</Typography>
                            <Typography style={{ flex: 1, padding: '1%' }}>{element.title}</Typography>
                            <Typography style={{ padding: '1%' }}>Tags: </Typography>
                            {this.tags(element.tags)}
                        </Box>
                    </Container>
                </Button>
            )
            content.push(problem);
        });
        return content;
    }

    handleSearch = () => {
        const { title, tags, nivel } = this.state;
        let param = {};
        if (title !== '') {
            param.pattern = title;
        }
        if (tags.length !== 0) {
            param.tags = JSON.stringify(tags);
        }
        if (nivel !== 0) {
            param.level = nivel;
        }

        this.searchProblems(param);
    }

    searchProblems = async (param = {}) => {
        try {
            const response = await problemRoutes.getProblems(param);
            this.setState({ problems: response.data.results })

        } catch (error) {
        }
    }


    render() {
        return (
            <Container style={{padding:0}}>
                <Header page='QUESTÕES' />
                <Paper style={{ minHeight: '80vh', marginTop: '2%', marginBottom: '2%' }}>
                    <Box display='flex'>
                        <TextField style={{ flex: 4 }} variant='outlined' label='Titulo' onChange={this.handleChange} />
                        <TextField style={{ flex: 4 }} variant='outlined' label='Tags (Separe com espaço)' onChange={this.handleTagChange} />
                        <TextField style={{ flex: 1 }} variant='outlined' label='Nivel' select value={this.state.nivel} onChange={this.handleNivelChange}>
                            {this.menuItems()}
                        </TextField>
                        <IconButton onClick={this.handleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </IconButton>
                    </Box>
                    <Box display='flex' flexDirection='column' alignContent='center' alignItems='center'>
                        {this.state.problems.length === 0 ? <Typography>Sua busca não teve nenhum resultado</Typography> : this.listProblems()}
                    </Box>
                </Paper>
                <Footer />
            </Container>
        )
    }

}
export default Questions;