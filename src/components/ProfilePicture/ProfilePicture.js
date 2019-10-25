import React from 'react';
import styles from '../ProfilePicture/ProfilePicture.css';

const ProfilePicture = ({url}) => {
    return (
        <div>
            <img style={styles.img} src={url} alt="Foto de Perfil"/>
        </div>
    );
}

export default ProfilePicture;