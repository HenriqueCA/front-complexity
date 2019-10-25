import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { TextField, Container, Button, Link } from '@material-ui/core';
import styles from './Login.css.js';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }

    handleSubmit(event) {
        //Todo
    }

    render () {
        return (
            <>
                <Header/>
                    <Container style={styles.main} maxWidth="xs">
                        <h1>
                            Login
                        </h1>
                        <TextField
                          style={styles.input}
                          variant="filled"
                          margin="normal"
                          fullWidth
                          label="Email/Nickname"
                          autoFocus
                          onChange={this.handleChange}
                          value={this.state.email}
                          name='email'
                        />
                        <TextField
                          style={styles.input}
                          variant="filled"
                          margin="normal"
                          fullWidth
                          label="Senha"
                          onChange={this.handleChange}
                          value={this.state.password}
                          name='password'
                          type='password'
                        />
                        <Link style={styles.link} href="">Esqueceu sua senha?</Link>
                        <Button
                          style={styles.button}
                          variant='contained'
                          size='medium'
                          onClick={this.handleSubmit}
                        >
                            Entrar
                        </Button>
                    </Container>
                <Footer/>
            </>
        )
    }

}

export default Login;