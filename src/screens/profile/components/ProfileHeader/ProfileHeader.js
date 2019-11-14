import React from 'react';
import styles from './ProfileHeader.css';
import { Paper, Typography, Container, Box } from '@material-ui/core';

const ProfileHeader = ({ uData }) => {
    return (
        <Container style={{ padding: 0 }}>
            <Paper>
                <Box display='flex' style={{ padding: '2%', flex:1 }}>
                    <Box display='flex' flexDirection='column' style={{ flex: 1 }}>
                        <Typography variant='h4' style={{ paddingBottom: '2%' }}>
                            {uData.nick}
                        </Typography>
                        <Typography variant='body2' style={{ paddingLeft: '5%' }}>
                            {uData.institution}
                        </Typography>
                        <Typography variant='body2' style={{ paddingLeft: '5%' }}>
                            {uData.country}
                        </Typography>
                        <Typography style={{ paddingTop: '2%', paddingLeft: '5%' }}>
                            Nível: {uData.level}
                        </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <Typography>
                            Moedas: {uData.gold}
                        </Typography>
                        <Typography style={{ paddingTop: '50%' }}>
                            Experiência: {uData.currentXp}/{uData.nextLvlXP}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}

export default ProfileHeader;