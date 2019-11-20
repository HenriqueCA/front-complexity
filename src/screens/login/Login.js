import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { TextField, Container, Button, Link, Paper } from '@material-ui/core';
import styles from './Login.css.js';
import { userRoutes } from 'library/routes/backendRequest';
import { TOKEN, NICKNAME } from 'library/util';
import { Redirect } from 'react-router-dom';
import SnackbarUtil from '../../components/SnackBar/SnackbarUtil';

const LOGINSUCCESS = 'Autenticação bem sucedida!';

const LOGINFAILED = 'Parece que suas credenciais estão inválidas.';

class Login extends React.Component {

    snackbarRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false,
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
        this.loginUser();
    }

    isEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    loginUser = async () => {
        const { email, password } = this.state;
        let user;
        if (this.isEmail(email)) {
            user = { player: { email, password } };
        } else {
            user = { player: { nick: email, password } };
        }

        try {
            const response = await userRoutes.login(user);
            localStorage.setItem(TOKEN, "Bearer " + response.data.token);
            localStorage.setItem(NICKNAME, response.data.nick);
            this.snackbarRef.current.openSnackbar(LOGINSUCCESS, 'success');
            setTimeout(() => window.location.href = '/', 3000);
        } catch (error) {
            this.snackbarRef.current.openSnackbar(LOGINFAILED, 'error');
        }
    }

    render() {
        const { redirect } = this.state;
        return (
            <Container style={{ padding: 0 }}>
                <SnackbarUtil ref={this.snackbarRef} />
                {redirect ? <Redirect to='/' /> : undefined}
                <Header />
                <Paper style={{ marginTop: '2%', marginBottom: '2%' }}>
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
                        <Link style={styles.link} href="/forgot-password">Esqueceu sua senha?</Link>
                        <Button
                            style={styles.button}
                            variant='contained'
                            size='medium'
                            onClick={this.handleSubmit}
                        >
                            Entrar
                        </Button>
                    </Container>
                </Paper>
                <Footer />
            </Container>
        )
    }

}

export default Login;