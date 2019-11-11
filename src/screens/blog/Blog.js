import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Paper, Typography, TextField, MenuItem, Grid, Input, InputAdornment, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 'Recentes',
            search: 'Titulo'
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value })

    }

    handleSearch = (event) => {
        //TODO SEARCH

    }

    blogsList = () =>{

    }

    render() {
        return (
            <>
                <Header />
                <Container style={{ height: '30vh' }}>
                    <Paper square={true} style={{ height: '15%', padding: '0.5%', marginBottom:'3%' }}>
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
                                <TextField select value={this.state.search} onChange={this.handleChange} name='search'>
                                    <MenuItem value='Titulo' key='Titulo'>Titulo</MenuItem>
                                    <MenuItem value='Autor' key='Autor'>Autor</MenuItem>
                                    <MenuItem value='Corpo' key='Corpo'>Corpo</MenuItem>
                                </TextField>
                                <Input endAdornment={
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
                    {this.blogsList()}
                </Container>
                <Footer />
            </>
        )
    }

}

export default Blog;