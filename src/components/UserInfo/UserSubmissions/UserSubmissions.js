import React from 'react';
import { Container, Card, Typography, Box } from '@material-ui/core';
import styles from './UserSubmissions.css';
import Scroll from '../../../components/Scroll/Scroll';


function mountSubmissions(submissions) {
    return submissions.map((submission, i) => {
        return  (
            <Box flexDirection='row' display='flex' key={i}>
                <Typography  style={styles.margin}>
                    { submission.pid }
                </Typography>
                <Typography  style={styles.margin}>
                    { submission.name }
                </Typography>
                <Typography  style={styles.margin}>
                    { submission.language }
                </Typography>
                <Typography  style={styles.margin}>
                    { submission.date }
                </Typography>
            </Box>
        );
    });
}

const UserSubmissions = ({ submissions }) => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Box flexDirection='row' display='flex' >
                    <Typography  style={styles.margin}>
                        PID
                    </Typography>
                    <Typography  style={styles.margin}>
                        NOME
                    </Typography>
                    <Typography  style={styles.margin}>
                        LINGUAGEM
                    </Typography>
                    <Typography  style={styles.margin}>
                        DATA DE SUBMISSÃO
                    </Typography>
                </Box>
                <Scroll>
                    { mountSubmissions(submissions) }
                </Scroll>
           </Card>
        </Container>
    );
}

export default UserSubmissions;