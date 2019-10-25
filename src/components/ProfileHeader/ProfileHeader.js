import React, { Component } from 'react';
import styles from './ProfileHeader.css';
import { Paper, Typography } from '@material-ui/core';

const ProfileHeader = ({uData}) => {
    return (
        <div>
            <Paper style={styles.size}>
                <Typography>
                    {uData.nick}
                </Typography>
                <Typography>
                    {uData.university}
                </Typography>
                <Typography>
                    {uData.city}, {uData.state}, {uData.country}
                </Typography>
                <Typography>
                    Moedas: {uData.gold}
                </Typography>
                <Typography>
                    Nível: {uData.level}
                </Typography>
                <Typography>
                    Experiência: {uData.currentXp}/{uData.nextLvlXP}
                </Typography>
            </Paper>
        </div>
    )
}

export default ProfileHeader;