import React from 'react';
import styles from './Scroll.css';


const Scroll = (props) => {
    return (
        <div style={{ ...styles,...{height: props.height || '250px'} }} >
            {props.children}
        </div>
    );
};

export default Scroll;