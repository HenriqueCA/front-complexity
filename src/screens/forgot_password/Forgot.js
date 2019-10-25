import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import styles from './Forgot.css.js';
import { Container, TextField, Button } from '@material-ui/core';


class Forgot extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text : '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    handleSubmit(event) {
        this.setState({text:'Uma nova senha será enviada para seu email'});
        //Todo
    }

    render() {
        const {text} = this.state;
        return (
            <>
                <Header />
                <Container style={styles.main} maxWidth="xs">
                    <h1>Esqueci minha senha</h1>
                    <TextField
                          style={styles.input}
                          variant="filled"
                          margin="normal"
                          required
                          fullWidth
                          label="Email"
                          autoFocus
                          onChange={this.handleChange}
                          value={this.state.email}
                          name='email'
                    />
                    <Button
                      style={styles.button}
                      variant='contained'
                      size='medium'
                      onClick={this.handleSubmit}
                    >
                        Enviar
                    </Button>
                    <p>{text}</p>

                </Container>
                <Footer />
            </>
        )
    }
};

export default Forgot;