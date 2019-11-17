import React from 'react';
import styles from './ProfileHeader.css';
import { Paper, Typography, Container, Box } from '@material-ui/core';

class ProfileHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friend: false
        }
    }

    //TODO: ADD and REMOVE friend.
    componentDidMount() {

    }

    render() {

        const { uData } = this.props;
        return (
            <Container style={styles.container}>
                <Paper>
                    <Box display='flex' style={styles.infoContainer}>
                        <Box display='flex' flexDirection='column' style={styles.leftInfo}>
                            <Typography variant='h4' style={styles.nick}>
                                {uData.nick}
                            </Typography>
                            <Typography variant='body2' style={styles.institution}>
                                {uData.institution}
                            </Typography>
                            <Typography variant='body2' style={styles.country}>
                                {uData.country}
                            </Typography>
                            <Typography style={styles.level}>
                                Nível: {uData.level}
                            </Typography>
                        </Box>
                        <Box display='flex' flexDirection='column'>
                            <Typography>
                                Moedas: {uData.coins}
                            </Typography>
                            <Typography style={styles.xp}>
                                Experiência: {uData.xp || 0}/{uData.nextLvlXP || 2000}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        )
    }
}

export default ProfileHeader;