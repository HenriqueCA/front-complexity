import React from 'react';
import styles from './UserTeams.css';
import { Card, Typography, Container } from '@material-ui/core';


const UserTeams = () => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Typography>
                    Teams
                </Typography>
            </Card>
        </Container>
    );
}

export default UserTeams;