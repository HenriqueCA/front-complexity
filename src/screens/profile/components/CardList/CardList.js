import React from 'react';
import FriendCard from '../FriendCard/FriendCard';
import styles from './CardList.css.js';
import Scroll from 'components/Scroll/Scroll';
import { Container, Typography, Box } from '@material-ui/core';

function initFriendsList(friendsList){
    return friendsList.map((friend, i) => {
        return  (
            <FriendCard
                key = {i}
                nick = {friend.nick}
                thumbnail = {friend.thumbnail}
            />
        );
    });
     
}

const CardList = ({friendsList}) => {
    return( 
        <Container style={styles.container}>
            <Box display='flex' flexDirection='column'>
            
                <Box display='center' style={styles.title}>
                    <Typography style={{color:'white'}}>
                        Amigos
                    </Typography>
                </Box>
                <Box display='center'>
                    <Scroll height='250px'>
                        <Container style={styles.card}>
                            { initFriendsList(friendsList) }
                        </Container>
                    </Scroll>
                </Box>
            </Box>
        </Container>
        );
}


export default CardList;