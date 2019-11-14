import React from 'react';
import styles from './UserEditProfile.css';
import { Card, Typography, Container, Paper, Grid, TextField, Button } from '@material-ui/core';


class UserEditProfile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nick : this.props.uData.nick,
            institution : this.props.uData.institution,
            country : this.props.uData.country
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    changeInfo(){

    }
    changePassword(){

    }


     render(){
         return(
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Paper>
                    <Grid container direction="column">
                        <Grid item style={styles.margin} >
                            <h3>Dados Pessoais</h3>
                        </Grid>
                        <Grid container direction="row" alignItems="center" spacing={3} style={styles.margin}>
                            <Grid item>
                                <Typography>
                                    Nick:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField value={this.state.nick} name='nick' onChange={e => this.handleChange(e)}/>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center"  spacing={3} style={styles.margin}>
                            <Grid item>
                                <Typography>
                                    Instituição:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField value={this.state.institution} name='institution' onChange={e => this.handleChange(e)}/>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center"  spacing={3} style={styles.margin}>
                            <Grid item>
                                <Typography>
                                    País:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField value={this.state.country} name='country' onChange={e => this.handleChange(e)}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Button
                        style={styles.button}
                        variant='contained'
                        size='small'
                        onClick={this.changeInfo}
                        >
                            Salvar alterações!
                        </Button>
                    </Grid>

                    <Grid container direction="column"  justify="flex-start">
                        <Grid item style={styles.margin} >
                            <h3>Conta</h3>
                            <h4>Alterar senha</h4>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={styles.margin}>
                            <Grid item>
                                <Typography>
                                    Senha Atual:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField type="password" name="password"/>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={styles.margin}>
                            <Grid item>
                                <Typography>
                                    Confirme a senha:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField type="password" name="confirmPassword"/>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" style={styles.margin}>
                            <Grid item>
                                <Typography>
                                    Nova senha:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField  name="newPassword"/>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                        <Button
                        style={styles.button}
                        variant='contained'
                        size='small'
                        onClick={this.changePassword}
                        >
                            Mudar Senha
                        </Button>
                    </Grid>
                        
                    </Grid>
                </Paper>
            </Card>
        </Container>
        )
    }
}

export default UserEditProfile;