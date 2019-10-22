import React from 'react';
import mock from './mock.js';
import FriendCard from '../FriendCard/FriendCard';
import styles from './CardList.css.js';
import Scroll from '../Scroll/Scroll';

const CardList = ({friendsList}) => {
    return( 
        <div style={styles.div}>
            <h3>Amigos</h3>
            <Scroll>
            <div style={styles.card}>
            {
                friendsList.map((friend, i) => {
                    return  (
                        <FriendCard
                            nick = {friendsList[i].nick}
                            thumbnail = {friendsList[i].thumbnail}
                        />
                    );
                })
            }
            </div>
            </Scroll>
        </div>
        );
}

export default CardList;