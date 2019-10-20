import React from 'react';
import styles from './FriendIcon.css.js';

class FriendIcon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nick: props.nick,
            thumbnail: props.thumbnail
        }

    }

    render() {
        return (
            // Essa div tem que ser um link para o perfil
            <div>
                <img style={styles.img} src={this.state.thumbnail}/>
                <figcaption>{this.state.nick}</figcaption>
            </div>
        )
    }




}

export default FriendIcon;