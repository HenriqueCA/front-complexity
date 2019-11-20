import React, { Component } from 'react';
import { Container, TextField, MenuItem, Button, Typography } from '@material-ui/core';
import problemRoutes from '../../../library/routes/problemRoutes';
import SnackbarUtil from '../../../components/SnackBar/SnackbarUtil';

class Submit extends React.Component {

    snackbarRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            language: '',
            code: '',
            file: undefined,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleClick = (event) => {
        const { code, file } = this.state;
        if (code === '' && file === undefined) {
            this.snackbarRef.current.openSnackbar('Tente inserir um arquivo ou escrever seu código no campo de texto!', 'info');
        } else if (file !== undefined) {
            this.sendFile(file);
        }
        else {
            this.createAndSendFile(code);
        }
    }

    sendFile = async (file) => {
        const { id } = this.props;
        let form = new FormData();
        form.append('script', file);
        try {
            const response = await problemRoutes.submitProblem(id, form);
            console.log(response);
            this.snackbarRef.current.openSnackbar('Sua solução foi submetida com sucesso!', 'success');
        } catch (error) {
            console.log(error);
            this.snackbarRef.current.openSnackbar('Algo deu errado na submissão de sua solução...', 'error');
        }
    }

    createAndSendFile = (code) => {
        const { language } = this.state;
        let type;
        let name;
        if (language === 'C++') {
            type = 'text/plain';
            name = 'script.cpp';
        } else {
            type = 'text/x-script.python';
            name = 'script.py';
        }
        let file = new File([code], name, { type });
        this.sendFile(file);
    }

    handleFile = (event) => {
        const file = event.target.files[0];
        this.setState({ file });
    }

    render() {

        return (
            <Container>
                <SnackbarUtil ref={this.snackbarRef} />
                <TextField
                    style={{ textAlign: 'left' }}
                    select
                    id='language'
                    label='Linguagem'
                    fullWidth
                    variant='filled'
                    value={this.state.language}
                    onChange={this.handleChange}
                    name='language'
                >
                    <MenuItem
                        value='C++'
                        key='C++'
                    >
                        C++
                    </MenuItem>
                    <MenuItem
                        value='Python'
                        key='Python'
                    >
                        Python
                    </MenuItem>

                </TextField>
                <TextField
                    fullWidth
                    variant='outlined'
                    multiline
                    rows={15}
                    onChange={this.handleChange}
                    name='code'

                />
                <Typography>Ou faça upload do arquivo (A prioridade será do arquivo)</Typography> <input type='file' onChange={this.handleFile} />
                <Button
                    variant='contained'
                    fullWidth
                    onClick={this.handleClick}
                >
                    Submeter
                </Button>
            </Container>
        )
    }
};

export { Submit };