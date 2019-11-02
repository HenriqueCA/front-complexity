import React from 'react';
import styles from './UserTeams.css';
import { Card, Typography, Container, Box } from '@material-ui/core';
import Scroll from '../../../components/Scroll/Scroll';

function mountTeams(teams) {
    return teams.map((team, i) => {
        return  (
            <Box flexDirection='row' display='flex' key={i}>
                <Typography  style={styles.margin}>
                    { team.contest }
                </Typography>
                <Typography  style={styles.margin}>
                    { team.name }
                </Typography>
                <Typography  style={styles.margin}>
                    { `(${team.members[0]}, ${team.members[1]}, ${team.members[2]})` }
                </Typography>
            </Box>
        );
    });
}

const UserTeams = ({ teams }) => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
            <Box flexDirection='row' display='flex' >
                    <Typography  style={styles.margin}>
                        CONTEST
                    </Typography>
                    <Typography  style={styles.margin}>
                        TIME
                    </Typography>
                    <Typography  style={styles.margin}>
                        MEMBROS
                    </Typography>
                </Box>
                <Scroll>
                    { mountTeams(teams) }
                </Scroll>
            </Card>
        </Container>
    );
}

export default UserTeams;