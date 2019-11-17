import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Box, Typography, Paper, TextField, Button } from '@material-ui/core';
import BlogHeader from '../../components/Blog/BlogHeader';
import styles from './CreateBlog.css.js';
import {blogRoutes} from 'library/routes/backendRequest';
import {Redirect} from 'react-router-dom';

class CreateBlog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            redirect: false,
        }
    }


    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value });
    }

    postBlog = async () => {
        const {title, body} = this.state;
        if(title.length > 5 && body.length > 5){
            try {
                await blogRoutes.createBlog(title, body);
                this.setState({redirect:true});

            } catch (error) {
                console.log(error);
                //TODO: Handle error.
            }
        }else{
            alert("O titulo e o conteúdo precisam ser maiores que 5 caracteres.");
        }
        
    }

    render() {
        const { redirect } = this.state;
        return (
            <>
            {redirect? <Redirect to='/blog'/> : undefined}
                <Header />
                <BlogHeader />
                <Container style={styles.mainContainer}>
                    <Typography variant='h3'>Crie um blog</Typography>
                    <Box display='flex' flexDirection='column' style={styles.createContainer}>
                        <Paper>
                        <TextField fullWidth label='Titulo' inputProps={{maxLength:200}} onChange={this.handleChange} value={this.state.title} name='title' />
                        </Paper>
                        <Paper>
                        <TextField fullWidth multiline rows={10} label='Conteúdo' inputProps={{ maxLength: 5000 }} onChange={this.handleChange} value={this.state.body} name='body' />
                        </Paper>
                        <Paper>
                        <Button fullWidth style={styles.postButton} onClick={this.postBlog}>Postar</Button>
                        </Paper>
                    </Box>
                </Container>

                <Footer />
            </>
        )
    }

}

export default CreateBlog;