import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import styles from './Forgot.css.js';
import { Container, TextField, Button } from '@material-ui/core';
import {userRoutes} from 'library/routes/backendRequest';
import {Redirect} from 'react-router-dom';


class Forgot extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            validEmail: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    handleSubmit(event) {
        const {validEmail} = this.state;
        if(validEmail){
            this.requestPassword();
        }
    }

    requestPassword = async () => {
        const {email} = this.state;
        const user = {player:{email}};
        try {
            const response = await userRoutes.forgetPassword(user);
            if(response.status === 200){
                // Mudança de senha.
                alert("Sua senha nova foi enviada para o seu email!");
                await setTimeout({}, 2000);
                return <Redirect to='/'/>;
            }
            else{
                alert("Não há nenhum usuário cadastrado com esse email.");
            }
        } catch (error) {
            alert('Oops. Something went wrong.');            
        }
    }

    validateEmail = () => {
        const {email} = this.state;
        const re = /\S+@\S+\.\S+/;
        const validEmail = re.test(email);
        this.setState({validEmail});
    }

    render() {
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
                          onBlur={this.validateEmail}
                          error={!this.state.validEmail}
                          helperText={this.state.validEmail ? "" : "Email inválido"}
                    />
                    <Button
                      style={styles.button}
                      variant='contained'
                      size='medium'
                      onClick={this.handleSubmit}
                    >
                        Enviar
                    </Button>
                </Container>
                <Footer />
            </>
        )
    }
};

export default Forgot;