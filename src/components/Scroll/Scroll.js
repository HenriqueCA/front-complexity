import React from 'react';
import styles from './Scroll.css';


const Scroll = (props) => {
    return (
        <div style={styles}>
            {props.children}
        </div>
    );
};

export default Scroll;