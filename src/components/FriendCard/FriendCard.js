import React from 'react';
import styles from './FriendCard.css.js';


const FriendCard = ({nick, thumbnail}) => {
    return (
        // Essa div tem que ser um link para o perfil
        <div>
            <div style={styles.friendContact}>
                <img style={styles.img} src={thumbnail}/>
                <figcaption style={styles.font}>{nick}</figcaption>
            </div>
        </div>
    );
}

export default FriendCard;