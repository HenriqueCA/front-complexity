import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import styles from './HomeCardList.css';
import { Container } from '@material-ui/core';

function initHomeCardList(cardTitles) {
    return cardTitles.map( (card, i) => {
        return (
            <HomeCard
                key = {i}
                title = {card.title}
                url = 'https://img.icons8.com/dusk/64/000000/questions.png'
            />
        );
    });
}


const HomeCardList = ({ cardTitles }) => {
    return (
        <Container style={styles.card}>
            { initHomeCardList(cardTitles) }
        </Container>
    );
}


export default HomeCardList;