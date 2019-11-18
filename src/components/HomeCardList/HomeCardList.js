import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import styles from './HomeCardList.css';
import { Container, Grid } from '@material-ui/core';

function initHomeCardList(cardTitles) {
    return cardTitles.map((card, i) => {
        return (
            <Grid item xs={4} style={{height:'22vh'}}>
                <HomeCard
                    key={i}
                    title={card.title}
                    url='https://img.icons8.com/dusk/64/000000/questions.png'
                />
            </Grid>
        );
    });
}


const HomeCardList = ({ cardTitles }) => {
    return (
        <Container>
            <Grid container style={styles.card} spacing={3}>
                {initHomeCardList(cardTitles)}
            </Grid>
        </Container>
    );
}


export default HomeCardList;