import React from 'react';
import { Container, Paper, Typography, TextField, MenuItem, Grid, Input, InputAdornment, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

class BlogHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 'Recentes',
            searchBy: 'Titulo',
            search: '',
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value })
        if(name === 'order'){
            const {changeOrder} = this.props;
            changeOrder(event.target.value);
        }
    }

    handleSearch = (event) => {
        const {search, searchBy} = this.state;
        let goToSearch;
        if(searchBy === 'Titulo'){
            goToSearch = <Redirect to={`/blog/search/?title=${search}`} />;
        }else if (searchBy === 'Author'){
            goToSearch = <Redirect to={`/blog/search/?author=${search}`} />;
        }else{
            goToSearch = <Redirect to={`/blog/search/?body=${search}`} />;
        }
        return goToSearch;
    }

    render() {
        return (
            <Container>
                <Paper square={true} style={{ height: '15%', padding: '0.5%', marginBottom: '3%' }}>
                    <Grid container style={{ textAlign: 'center' }} alignItems='center' spacing={0}>
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
            </Container>
        )
    }

}

export default BlogHeader;