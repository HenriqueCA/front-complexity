import React from 'react';
import styles from './UserEditProfile.css';
import { Typography, Container, Box, TextField, Button } from '@material-ui/core';
import { userRoutes } from 'library/routes/backendRequest';
import Scroll from 'components/Scroll/Scroll';
import SnackbarUtil from '../../../../../components/SnackBar/SnackbarUtil';

const INFOCHANGESUCCESS = 'Suas informações foram alteradas com sucesso!';
const INFOCHANGEFAIL = 'Algo de errado aconteceu ao tentarmos alterar suas informações!';

class UserEditProfile extends React.Component {

    snackbarRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.uData.name,
            institution: this.props.uData.institution,
            city: this.props.uData.city,
            state: this.props.uData.state,
            country: this.props.uData.country,
            nationality: this.props.uData.nationality,
            nick: this.props.uData.nick,
            email: this.props.uData.email,
            password: '',
            confirmPassword: '',
            newPassword: '',
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
        this.setState({ image, imagePreview });
    }

    changeInfo = () => {
        const { image, nationality, institution, name } = this.state;
        if (image) {
            this.changeImage(image);
        }

        let updates = {};
        if (nationality !== this.props.uData.nationality) {
            updates.nationality = nationality;
        }
        if (institution !== this.props.uData.institution) {
            updates.institution = institution;
        }
        if (name !== this.props.uData.name) {
            updates.name = name;
        }
        if (Object.entries(updates).length !== 0 || updates.constructor !== Object) {
            this.requestChange(updates);
        }
    }

    changeImage = async (image) => {
        let form = new FormData();
        form.append('image', image);
        try {
            await userRoutes.uploadImage(form);
            this.snackbarRef.current.openSnackbar(INFOCHANGESUCCESS,'success');
        } catch (error) {
            this.snackbarRef.current.openSnackbar(INFOCHANGEFAIL,'error');
        }
    }

    requestChange = async (updates) => {
        try {
            await userRoutes.updateMyProfile(updates);
            this.snackbarRef.current.openSnackbar(INFOCHANGESUCCESS,'success');
        } catch (error) {
            this.snackbarRef.current.openSnackbar(INFOCHANGEFAIL,'error');
        }
    }

    changePassword = () => {
        const { password, confirmPassword, newPassword } = this.state;
        if (newPassword === confirmPassword) {
            try {
                userRoutes.changePassword(password, newPassword);
                alert("Sua senha foi alterada com sucesso.");
            } catch (error) {
                //TODO: Handle Error.
            }
        } else {
            alert("Senhas diferentes.");
        }

    }


    render() {
        return (
            <Container style={styles.container}>
                <SnackbarUtil ref={this.snackbarRef} />
                <Scroll height='60vh'>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='h5' style={styles.title}>Dados Pessoais</Typography>

                        <Box display='flex'>
                            <Typography style={styles.label}>Nome:</Typography>
                            <TextField fullWidth value={this.state.name} name='name' onChange={e => this.handleChange(e)} />
                        </Box>

                        <Box display='flex'>
                            <Typography style={styles.label}>Instituição:</Typography>
                            <TextField fullWidth value={this.state.institution} name='institution' onChange={e => this.handleChange(e)} />
                        </Box>

                        <Box display='flex'>
                            <Typography style={styles.label}>Nacionalidade:</Typography>
                            <TextField fullWidth value={this.state.nationality} name='nationality' onChange={e => this.handleChange(e)} />
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

                        <Typography variant='h5' style={styles.accountTitle}>Conta</Typography>

                        <Box display='flex'>
                            <Typography style={styles.label}>Nickname:</Typography>
                            <TextField fullWidth value={this.state.nick} name='nick' onChange={this.handleChange} />
                        </Box>

                        <Box display='flex'>
                            <Typography style={styles.label}>Email:</Typography>
                            <TextField fullWidth value={this.state.email} name='email' onChange={this.handleChange} />
                        </Box>

                        <img src={this.state.imagePreview} style={styles.imagePreview} alt='img-preview' />
                        <Button variant='contained' component='label' style={styles.title}>
                            Alterar imagem <input type='file' style={{ display: 'none' }} onChange={this.handleImage} />
                        </Button>

                        <Button
                            style={styles.button}
                            variant='contained'
                            size='small'
                            onClick={this.changeInfo}
                        >
                            Salvar alterações!
                    </Button>

                        <Typography variant='h6' style={styles.title}>Alterar Senha</Typography>

                        <Box display='flex'>
                            <Typography style={styles.label}>Senha Atual:</Typography>
                            <TextField fullWidth type="password" name="password" onChange={this.handleChange} />
                        </Box>

                        <Box display='flex'>
                            <Typography style={styles.label}>Nova senha:</Typography>
                            <TextField fullWidth type='password' name="newPassword" onChange={this.handleChange} />
                        </Box>

                        <Box display='flex'>
                            <Typography style={styles.label}>Confirme a senha:</Typography>
                            <TextField fullWidth type="password" name="confirmPassword" onChange={this.handleChange} />
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
                </Scroll>
            </Container>
        )
    }
}

export default UserEditProfile;