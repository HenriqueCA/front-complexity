import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import styles from './Forgot.css.js';
import { Container, TextField, Button, Paper } from '@material-ui/core';
import { userRoutes } from 'library/routes/backendRequest';
import { Redirect } from 'react-router-dom';
import SnackbarUtil from '../../components/SnackBar/SnackbarUtil';

const FORGOTSUCCESS = 'Uma nova senha será enviada para seu email!';
const FORGOTFAIL = 'Algo deu errado na sua requisição de nova senha...';

class Forgot extends React.Component {

    snackbarRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            validEmail: true,
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        const { validEmail } = this.state;
        if (validEmail) {
            this.requestPassword();
        }
    }

    requestPassword = async () => {
        const { email } = this.state;
        const user = { player: { email } };
        try {
            await userRoutes.forgetPassword(user);
            this.snackbarRef.current.openSnackbar(FORGOTSUCCESS, 'success');
            setTimeout(() => { this.setState({ redirect: true }) }, 3000);
        } catch (error) {
            this.snackbarRef.current.openSnackbar(FORGOTFAIL, 'warn');
        }
    }

    validateEmail = () => {
        const { email } = this.state;
        const re = /\S+@\S+\.\S+/;
        const validEmail = re.test(email);
        this.setState({ validEmail });
    }

    render() {
        const { redirect } = this.state;
        return (
            <>
                <SnackbarUtil ref={this.snackbarRef} />
                {redirect ? <Redirect to='/' /> : undefined}
                <Header />
                <Paper style={{ marginTop: '2%', marginBottom: '2%' }}>
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
                </Paper>
                <Footer />
            </>
        )
    }
};

export default Forgot;