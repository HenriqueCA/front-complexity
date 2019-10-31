import React from 'react';
import styles from './UserContests.css';
import { Card, Typography, Container } from '@material-ui/core';


const UserContests = () => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Typography>
                    Contests
                </Typography>
            </Card>
        </Container>
    );
}

export default UserContests;