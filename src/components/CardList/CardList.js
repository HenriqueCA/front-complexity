import React from 'react';
import mock from './mock.js';
import FriendCard from '../FriendCard/FriendCard';
import styles from './CardList.css.js';
import Scroll from '../Scroll/Scroll';

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
        <div style={styles.div}>
            <h3>Amigos</h3>
            <Scroll>
            <div style={styles.card}>
                { initFriendsList(friendsList) }
            </div>
            </Scroll>
        </div>
        );
}


export default CardList;