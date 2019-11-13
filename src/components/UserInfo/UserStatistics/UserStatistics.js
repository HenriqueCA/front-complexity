import React from 'react';
import styles from './UserStatistics.css';
import { Card, Typography, Container } from '@material-ui/core';


const UserStatistics = ({ problemsSolved, problemsTried, totalOfSubmissions }) => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Typography>
                    Questões Resolvidas: { problemsSolved }
                </Typography>
                <Typography>
                    Questões Submetidas: { problemsTried }
                </Typography>
                <Typography>
                    Submissões: { totalOfSubmissions }
                </Typography>
            </Card>
        </Container>
    );
}

export default UserStatistics;