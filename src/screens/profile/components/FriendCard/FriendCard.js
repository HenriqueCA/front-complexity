import React from 'react';
import styles from './FriendCard.css.js';
import { Container, Avatar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const FriendCard = ({nick, thumbnail}) => {
    return (
        <Container style={styles.friendContact}>
            <Link to={`/profile/?player=${nick}`} style={styles.link}>
                <Avatar alt="profile picture" src={thumbnail} style={styles.avatar}/>
                <Typography style={styles.font}>{nick}</Typography>
             </Link>
        </Container>
    );
}

export default FriendCard;