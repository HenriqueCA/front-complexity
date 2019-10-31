import React from 'react';
import { Container, Card, Typography } from '@material-ui/core';
import styles from './UserSubmissions.css';


const UserSubmissions = () => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Typography>
                    Subsmissions
                </Typography>
            </Card>
        </Container>
    );
}

export default UserSubmissions;