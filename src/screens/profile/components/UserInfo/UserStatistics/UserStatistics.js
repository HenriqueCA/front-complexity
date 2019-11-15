import React from 'react';
import styles from './UserStatistics.css';
import {Typography, Container } from '@material-ui/core';


//TODO: MAKE STATISTICS.

const UserStatistics = ({ problemsSolved, problemsTried, totalOfSubmissions }) => {
    return (
        <Container style={{padding:0}}>
                <Typography>
                    Questões Resolvidas: { problemsSolved.length }
                </Typography>
                <Typography>
                    Questões Submetidas: { problemsTried.length }
                </Typography>
                <Typography>
                    Submissões: { totalOfSubmissions }
                </Typography>
        </Container>
    );
}

export default UserStatistics;