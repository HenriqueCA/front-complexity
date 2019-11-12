import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Paper, Typography, TextField, MenuItem, Grid, Input, InputAdornment, IconButton, Box} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { blogRoutes } from 'library/routes/backendRequest';

class Blogs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 'Recentes',
            searchBy: 'Titulo',
            search: '',
            blogsByTime: undefined,
            blogsByLikes: undefined,
        }
    }

    async componentDidMount() {
        try {
            let response = await blogRoutes.listByTime();
            if (response.status === 200) {
                let blogs = response.data.query;
                blogs.reverse();
                this.setState({ blogsByTime: blogs });
            }

            response = await blogRoutes.listByLike();
            if (response.status === 200) {
                let blogs = response.data.query;
                this.setState({ blogsByLikes: blogs });
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
        const { blogsByTime, blogsByLikes, order } = this.state;
        let list;
        if (order === 'Recentes') {
            list = blogsByTime;
        } else {
            list = blogsByLikes;
        }
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
                                <Typography>Ordenar por</Typography>
                            </Grid>
                            <Grid item xs={3} align='left'>
                                <TextField select value={this.state.order} onChange={this.handleChange} name='order' >
                                    <MenuItem
                                        value='Recentes'
                                        key='Recentes'
                                    >
                                        Recentes
                                        </MenuItem>
                                    <MenuItem
                                        value='Likes'
                                        key='Likes'
                                    >
                                        Likes
                                        </MenuItem>
                                </TextField>
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

export default Blogs;