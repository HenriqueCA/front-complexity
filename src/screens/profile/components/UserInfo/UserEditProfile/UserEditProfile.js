import React from 'react';
import styles from './UserEditProfile.css';
import { Typography, Container, Box, Grid, TextField, Button } from '@material-ui/core';


class UserEditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.uData.name,
            institution: this.props.uData.institution,
            city: this.props.uData.city,
            state: this.props.uData.state,
            country: this.props.uData.country,
            nick: this.props.uData.nick,
            email: this.props.uData.email,
            password: '',
            confirmPassword:'',
            newPassword:'',
            imagePreview: 'https://www.midlands4cities.ac.uk/wp-content/uploads/2019/04/student-profile-default.png',
            image: undefined,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleImage = (event) => {
        const image = event.target.files[0];
        const imagePreview = URL.createObjectURL(image);
        this.setState({image, imagePreview});
    }

    changeInfo() {

    }
    changePassword() {

    }


    render() {
        return (
            <Container style={{ padding: 0 }}>
                <Box display='flex' flexDirection='column'>
                    <Typography variant='h5' style={{alignSelf:'center'}}>Dados Pessoais</Typography>

                    <Box display='flex'>
                        <Typography style={styles.label}>Nome:</Typography>
                        <TextField fullWidth value={this.state.name} name='name' onChange={e => this.handleChange(e)} />
                    </Box>

                    <Box display='flex'>
                        <Typography style={styles.label}>Instituição:</Typography>
                        <TextField fullWidth value={this.state.institution} name='institution' onChange={e => this.handleChange(e)} />
                    </Box>

                    <Box display='flex'>
                        <Typography style={styles.label}>Cidade:</Typography>
                        <TextField fullWidth value={this.state.city} name='city' onChange={e => this.handleChange(e)} />
                    </Box>

                    <Box display='flex'>
                        <Typography style={styles.label}>Estado:</Typography>
                        <TextField fullWidth value={this.state.state} name='state' onChange={e => this.handleChange(e)} />
                    </Box>

                    <Box display='flex'>
                        <Typography style={styles.label}>País:</Typography>
                        <TextField fullWidth value={this.state.country} name='country' onChange={e => this.handleChange(e)} />
                    </Box>

                    <Typography variant='h5' style={{alignSelf:'center', marginTop:'2%'}}>Conta</Typography>

                    <Box display='flex'>
                        <Typography style={styles.label}>Nickname:</Typography>
                        <TextField fullWidth value={this.state.nick} name='nick' onChange={this.handleChange} />
                    </Box>

                    <Box display='flex'>
                        <Typography style={styles.label}>Email:</Typography>
                        <TextField fullWidth value={this.state.email} name='email' onChange={this.handleChange} />
                    </Box>

                        <img src={this.state.imagePreview} style={styles.imagePreview}/>
                        <Button variant='contained' component='label' style={{alignSelf:'center'}}>
                        Alterar imagem <input type='file' style={{display:'none'}} onChange={this.handleImage}/>
                    </Button>


                    <Button
                        style={styles.button}
                        variant='contained'
                        size='small'
                        onClick={this.changeInfo}
                    >
                        Salvar alterações!
                    </Button>

                    <Typography variant='h6' style={{alignSelf:'center'}}>Alterar Senha</Typography>

                    <Box display='flex'>
                        <Typography style={styles.label}>Senha Atual:</Typography>
                        <TextField fullWidth type="password" name="password" onChange={this.handleChange} />
                    </Box>

                    <Box display='flex'>
                        <Typography style={styles.label}>Confirme a senha:</Typography>
                        <TextField fullWidth type="password" name="confirmPassword" onChange={this.handleChange} />
                    </Box>

                    <Box display='flex'>
                        <Typography style={styles.label}>Nova senha:</Typography>
                        <TextField fullWidth name="newPassword" onChange={this.handleChange} />
                    </Box>

                    <Button
                        style={styles.button}
                        variant='contained'
                        size='small'
                        onClick={this.changePassword}
                    >
                        Mudar Senha
                    </Button>

                </Box>

            </Container>
        )
    }
}

export default UserEditProfile;