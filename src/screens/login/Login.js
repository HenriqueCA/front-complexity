import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { TextField, Container, Button, Link } from '@material-ui/core';
import styles from './Login.css.js';
import {userRoutes} from 'library/routes/backendRequest';

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
        this.loginUser();
    }

    isEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    loginUser = async () => {
        const {email, password} = this.state;
        let user;
        if(this.isEmail(email)){
            user = {player:{email,password}};
        }else{
            user = {player:{nick:email,password}};
        }

        try {
            const response = await userRoutes.login(user);

            // Handle Response.
        } catch (error) {
            alert('Oops. Something went wrong');            
        }
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