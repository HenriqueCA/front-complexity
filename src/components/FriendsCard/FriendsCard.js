import React from 'react';
import mock from './mock.js';
import FriendIcon from '../FriendIcon/FriendIcon';
import styles from './FriendsCard.css.js';

class FriendsCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friendsList : []
        }
    }

    componentDidMount() {
        let list = mock;
        //fetch('https://jsonplaceholder.typicode.com/users')
        //    .then(response => response.json())
        //    .then(users => this.setState({ robots: users }));
        this.setState({friendsList : list});
    }



    

    render(){
        return( 
        <div style={styles.div}>
            <h1>Amigos</h1>
            {
                this.state.friendsList.map((friend, i) => {
                    return  (
                        <FriendIcon
                            nick = {this.state.friendsList[i].nick}
                            thumbnail = {this.state.friendsList[i].thumbnail}
                        />
                    );
                })
            }
        </div>
        )
    }
}
export default FriendsCard;