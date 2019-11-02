import React, { Component } from 'react';
import styles from './ProfileHeader.css';
import { Paper, Grid, Typography, Container } from '@material-ui/core';

const ProfileHeader = ({uData}) => {
    return (
        <Container style={styles.padding}>
                <Paper style={styles.size}>
                
                <Grid container direction='row'>
                    <Grid container direction='column' xs={6}>
                        <Grid item>
                            <Typography>
                                {uData.nick}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                {uData.instituition}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                {uData.country}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                    Nível: {uData.level}
                            </Typography>
                        </Grid>
                    </Grid>
                        
                    <Grid container direction='column' xs={6}>
                        <Grid item>
                            <Typography>
                                Moedas: {uData.gold}
                            </Typography>
                        </Grid>
                        <Grid iten>
                            <Typography>
                                Experiência: {uData.currentXp}/{uData.nextLvlXP}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                </Paper>
        </Container>
    )
}

export default ProfileHeader;