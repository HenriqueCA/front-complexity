import React from 'react';
import { Container, Paper, Typography, TextField, MenuItem, Grid, Input, InputAdornment, IconButton, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Redirect, Link} from 'react-router-dom';
import styles from './BlogHeader.css.js';

class BlogHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 'Recentes',
            searchBy: 'Titulo',
            search: '',
            redirect: false,
        }
    }

    componentDidMount() {
        let url = window.location.href;
        url = new URL(url);
        let title = url.searchParams.get("title");
        let author = url.searchParams.get("author");
        let body = url.searchParams.get("body");
        let searchBy = 'Titulo';
        let search = '';
        if(title !== null){
            search = title;
            searchBy = 'Titulo';
        } else if (author !== null){
            search = author;
            searchBy = 'Autor';
        } else if (body !== null) {
            search = body;
            searchBy = 'Corpo';
        }

        this.setState({searchBy,search});
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value })
        if (name === 'order') {
            const { changeOrder } = this.props;
            changeOrder(event.target.value);
        }
    }

    handleSearch = async () => {
        const {makeSearch} = this.props;
        if(makeSearch){
            this.setState({redirect:true}, () => {makeSearch()});
        }
        else{
            this.setState({redirect:true});
        }
    }

    redirectSearch = () => {
        const { search, searchBy } = this.state;
        this.setState({ redirect: false });
        if (searchBy === 'Titulo') {
            return <Redirect to={`/blog/search/?title=${search}`} />;
        } else if (searchBy === 'Autor') {
            return <Redirect to={`/blog/search/?author=${search}`} />;
        } else {
            return <Redirect to={`/blog/search/?body=${search}`} />;
        }

    }

    render() {
        const { redirect } = this.state
        if (redirect) {
            return this.redirectSearch();
        }
        return (
            <Container style={{ padding: 0 }}>
                <Paper square={true} style={styles.blogHeader}>
                    <Grid container style={styles.grid} alignItems='center' spacing={0}>
                        {this.props.orderBar ?
                            (
                                <>
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
                                </>
                            ) :
                            (<Grid item xs={4} />)}

                        <Grid item xs={4}>
                            <TextField select value={this.state.searchBy} onChange={this.handleChange} name='searchBy'>
                                <MenuItem value='Titulo' key='Titulo'>Titulo</MenuItem>
                                <MenuItem value='Autor' key='Autor'>Autor</MenuItem>
                                <MenuItem value='Corpo' key='Corpo'>Corpo</MenuItem>
                            </TextField>
                            <Input value={this.state.search} onChange={this.handleChange} name='search' endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        edge='end'
                                        onClick={this.handleSearch}
                                    >
                                        <FontAwesomeIcon style ={styles.searchIcon} icon={faSearch} />
                                    </IconButton>
                                </InputAdornment>
                            } />
                        </Grid>

                        <Grid item xs={4}>
                            <Link to='/blog/create'>
                                <Button variant='contained'>
                                    Crie um post
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }

}

export default BlogHeader;