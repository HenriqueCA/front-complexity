import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { TextField, Container, Button } from '@material-ui/core';
import styles from './Signup.css.js';
import { userRoutes } from 'library/routes/backendRequest';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            email: '',
            password: '',
            confirm: '',
            validNickname: true,
            validEmail: true,
            validPassword: true,
            validConfirm: true,
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const { validNickname, validEmail, validPassword, validConfirm } = this.state;
        if (validEmail && validPassword && validNickname && validConfirm) {
            this.signupUser();
        }

    }

    signupUser = async () => {
        const { email, nickname, password } = this.state;
        const user = { player: { email, nick: nickname, password } };
        try {
            await userRoutes.signup(user);

            alert(`Seu cadastro foi realizado com sucesso, ${nickname}!`);
            this.setState({redirect: true});

        } catch (error) {
            //TODO: Handle Error.
        }

    }

    validateNickname = () => {
        const { nickname } = this.state;
        const validNickname = nickname !== "";
        this.setState({ validNickname });
    }

    validateEmail = () => {
        const { email } = this.state;
        const re = /\S+@\S+\.\S+/;
        const validEmail = re.test(email);
        this.setState({ validEmail });
    }

    validatePassword = () => {
        const { password } = this.state;
        const validPassword = password !== "";
        this.setState({ validPassword });
    }

    validateConfirm = () => {
        const { password, confirm } = this.state;
        const validConfirm = password === confirm;
        this.setState({ validConfirm });
    }

    render() {
        const { redirect } = this.state;
        return (
            <>
                {redirect ? <Redirect to='/'/> : undefined}
                <Header />
                <Container style={styles.main} maxWidth="xs">
                    <h1>
                        CADASTRE-SE
                        </h1>
                    <TextField
                        style={styles.input}
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        label="Nickname"
                        autoFocus
                        onChange={this.handleChange}
                        value={this.state.nickname}
                        name='nickname'
                        onBlur={this.validateNickname}
                        error={!this.state.validNickname}
                        helperText={this.state.validNickname ? "" : "Nickname inválido."}
                    />
                    <TextField
                        style={styles.input}
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        name='email'
                        onBlur={this.validateEmail}
                        error={!this.state.validEmail}
                        helperText={this.state.validEmail ? "" : "Email inválido."}
                    />
                    <TextField
                        style={styles.input}
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        label="Senha"
                        onChange={this.handleChange}
                        name='password'
                        type='password'
                        onBlur={this.validatePassword}
                        error={!this.state.validPassword}
                        helperText={this.state.validPassword ? "" : "Senha inválida."}
                    />
                    <TextField
                        style={styles.input}
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        label="Confirme sua senha"
                        onChange={this.handleChange}
                        name='confirm'
                        type='password'
                        onBlur={this.validateConfirm}
                        error={!this.state.validConfirm}
                        helperText={this.state.validConfirm ? "" : "Sua senha está diferente!"}
                    />
                    <Button
                        style={styles.button}
                        variant='contained'
                        size='medium'
                        onClick={this.handleSubmit}
                    >
                        Cadastrar
                        </Button>
                </Container>
                <Footer />
            </>
        )
    }

}

export default Signup;