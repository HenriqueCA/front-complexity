import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Paper, Typography, TextField, MenuItem, Grid, Input, InputAdornment, IconButton, Box} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { blogRoutes } from 'library/routes/backendRequest';

class SearchBlog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchBy: 'Titulo',
            search: '',
            blogs: undefined,
        }
    }

    async componentDidMount() {
        let url = window.location.href;
        url = new URL(url);
        let title = url.searchParams.get("title");
        let author = url.searchParams.get("author");
        let body = url.searchParams.get("body");
        try {
            let response;
            if(title){
                response = await blogRoutes.searchByTitle(title);
            }

            else if(author){
                response = await blogRoutes.searchByAuthor(author);
            }
            else if(body){
                response = await blogRoutes.searchByBody(body);
            }

            if(response.status === 200){
                this.setState({blogs: response.data.query});
            }
        } catch (error) {
            //alert('Oops. Something went wrong');
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value })

    }

    handleSearch = (event) => {
        //TODO SEARCH

    }

    listBlogs = () => {
        const { blogs } = this.state;
        let list = blogs;
        let content = [];
        if (list) {

            list.forEach(element => {
                let author = element.author.profile.name;
                let numLikes = element.numlikes;
                let numDislikes = element.numdislikes;
                let numComments = element.comments.length;
                let title = element.title;
                let id = element.id;
                //TODO: STYLE BLOG ELEMENT.
                let blog = (
                    <Paper style={{margin:'1%'}}>
                        
                    </Paper>
                );
                content.push(blog);

            });
        }

        return content;

    }


    render() {
        return (
            <>
                <Header />
                <Container style={{}}>
                    <Paper square={true} style={{ height: '15%', padding: '0.5%', marginBottom: '3%' }}>
                        <Grid container style={{ textAlign: 'center' }} alignItems='center' spacing={0}>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={3}>
    
                            </Grid>
                            <Grid item xs={4}>
                                <TextField select value={this.state.searchBy} onChange={this.handleChange} name='searchBy'>
                                    <MenuItem value='Titulo' key='Titulo'>Titulo</MenuItem>
                                    <MenuItem value='Autor' key='Autor'>Autor</MenuItem>
                                    <MenuItem value='Corpo' key='Corpo'>Corpo</MenuItem>
                                </TextField>
                                <Input onChange={this.handleChange} name='search' endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            edge='end'
                                            onClick={this.handleSearch}
                                        >
                                            <FontAwesomeIcon icon={faSearch} />
                                        </IconButton>
                                    </InputAdornment>
                                } />
                            </Grid>
                        </Grid>
                    </Paper>
                    <Box display='flex' flexDirection='column'>
                        {this.listBlogs()}
                    </Box>
                </Container>
                <Footer />
            </>
        )
    }

}

export default SearchBlog;