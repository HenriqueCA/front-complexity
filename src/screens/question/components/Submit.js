import React, { Component } from 'react';
import { Container, TextField, MenuItem } from '@material-ui/core';

class Submit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: '',
            code: ''
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({ [name] : value });
    }

    render() {

        return (
            <Container>
                <TextField
                    style={{textAlign:'left'}}
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
            </Container>
        )
    }
};

export { Submit };