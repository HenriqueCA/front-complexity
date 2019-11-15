import React from 'react';
import styles from './UserContests.css';
import { Typography, Container, Box } from '@material-ui/core';
import Scroll from 'components/Scroll/Scroll';

function mountContests(contests) {
    return contests.map((contest, i) => {
        return  (
            <Box flexDirection='row' display='flex' key={i}>
                <Typography  style={styles.contest}>
                    { contest.id }
                </Typography>
                <Typography  style={styles.solved}>
                    { contest.problemsSolved }
                </Typography>
                <Typography  style={styles.date}>
                    { contest.date }
                </Typography>
            </Box>
        );
    });
}


const UserContests = ({ contests }) => {
    return (
        <Container style={{padding:0}}>
            <Box flexDirection='row' display='flex' style={styles.infoContainer} >
                    <Typography  style={styles.contestInfo}>
                        ID
                    </Typography>
                    <Typography  style={styles.solvedInfo}>
                        RESOLVIDOS
                    </Typography>
                    <Typography  style={styles.dateInfo}>
                        DATA
                    </Typography>
                </Box>
                <Scroll height='58vh'>
                    { mountContests(contests) }
                </Scroll>
        </Container>
    );
}

export default UserContests;