import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { TextField, Container, Button } from '@material-ui/core';
import styles from './Signup.css.js';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            email : '',
            password: '',
            confirm: '',
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
                        />
                        <TextField
                          style={styles.input}
                          variant="filled"
                          margin="normal"
                          required
                          fullWidth
                          label="Senha"
                          onChange={this.handleChange}
                          value={this.state.password}
                          name='password'
                          type='password'
                        />
                        <TextField
                          style={styles.input}
                          variant="filled"
                          margin="normal"
                          required
                          fullWidth
                          label="Confirme sua senha"
                          onChange={this.handleChange}
                          value={this.state.confirm}
                          name='confirm'
                          type='password'
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
                <Footer/>
            </>
        )
    }

}

export default Signup;