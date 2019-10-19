import React from 'react';
import mock from './mock.txt';

class Friends extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            thumbnail: ''
        }

    }

    getFriends = () => {
        let friends = mock;
        return friends;
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }




}