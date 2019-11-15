import React from 'react';
import styles from './UserTeams.css';
import { Card, Typography, Container, Box } from '@material-ui/core';
import Scroll from 'components/Scroll/Scroll';

function mountTeams(teams) {
    return teams.map((team, i) => {
        return  (
            <Box display='flex' key={i}>
                <Typography  style={styles.contest}>
                    { team.contest }
                </Typography>
                <Typography  style={styles.name}>
                    { team.name }
                </Typography>
                <Typography  style={styles.members}>
                    { `(${team.members[0]}, ${team.members[1]}, ${team.members[2]})` }
                </Typography>
            </Box>
        );
    });
}

const UserTeams = ({ teams }) => {
    return (
        <Container style={{padding:0}}>
            <Box display='flex' style={styles.teamInfo} >
                    <Typography  style={styles.infoContest}>
                        CONTEST
                    </Typography>
                    <Typography  style={styles.infoName}>
                        TIME
                    </Typography>
                    <Typography  style={styles.infoMembers}>
                        MEMBROS
                    </Typography>
                </Box>
                <Scroll height='60vh' >
                    { mountTeams(teams) }
                </Scroll>
        </Container>
    );
}

export default UserTeams;