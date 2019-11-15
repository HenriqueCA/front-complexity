import React from 'react';
import { Container, Card, Typography, Box } from '@material-ui/core';
import styles from './UserSubmissions.css';
import Scroll from 'components/Scroll/Scroll';


function mountSubmissions(submissions) {
    return submissions.map((submission, i) => {
        return  (
            <Box flexDirection='row' display='flex' key={i} style={styles.submissionContainer}>
                <Typography  style={styles.submission}>
                    { submission.pid }
                </Typography>
                <Typography  style={styles.submission}>
                    { submission.name }
                </Typography>
                <Typography  style={styles.submission}>
                    { submission.language }
                </Typography>
                <Typography  style={styles.submission}>
                    { submission.date }
                </Typography>
            </Box>
        );
    });
}

const UserSubmissions = ({ submissions }) => {
    return (
        <Container style={{padding:0}}>
                <Box flexDirection='row' display='flex' style={styles.submissionInfo}>
                    <Typography  style={styles.info}>
                        PID
                    </Typography>
                    <Typography  style={styles.info}>
                        NOME
                    </Typography>
                    <Typography  style={styles.info}>
                        LINGUAGEM
                    </Typography>
                    <Typography  style={styles.info}>
                        DATA DE SUBMISSÃO
                    </Typography>
                </Box>
                <Scroll height='60vh'>
                    { mountSubmissions(submissions) }
                </Scroll>
        </Container>
    );
}

export default UserSubmissions;