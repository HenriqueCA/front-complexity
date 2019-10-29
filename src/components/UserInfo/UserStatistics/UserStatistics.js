import React from 'react';
import styles from './UserStatistics.css';
import { Card, Typography, Container } from '@material-ui/core';


const UserStatistics = () => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Typography>
                    Statistics
                </Typography>
            </Card>
        </Container>
    );
}

export default UserStatistics;