import React from 'react';
import styles from './UserContests.css';
import { Card, Typography, Container, Box } from '@material-ui/core';
import Scroll from '../../../components/Scroll/Scroll';

function mountContests(contests) {
    return contests.map((contest, i) => {
        return  (
            <Box flexDirection='row' display='flex' key={i}>
                <Typography  style={styles.margin}>
                    { contest.id }
                </Typography>
                <Typography  style={styles.margin}>
                    { contest.problemsSolved }
                </Typography>
                <Typography  style={styles.margin}>
                    { contest.date }
                </Typography>
            </Box>
        );
    });
}


const UserContests = ({ contests }) => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
            <Box flexDirection='row' display='flex' >
                    <Typography  style={styles.margin}>
                        ID
                    </Typography>
                    <Typography  style={styles.margin}>
                        RESOLVIDOS
                    </Typography>
                    <Typography  style={styles.margin}>
                        DATA
                    </Typography>
                </Box>
                <Scroll>
                    { mountContests(contests) }
                </Scroll>
            </Card>
        </Container>
    );
}

export default UserContests;