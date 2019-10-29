import React from 'react';
import styles from './UserEditProfile.css';
import { Card, Typography, Container } from '@material-ui/core';


const UserEditProfile = () => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Typography>
                    Editar Perfil
                </Typography>
            </Card>
        </Container>
    );
}

export default UserEditProfile;