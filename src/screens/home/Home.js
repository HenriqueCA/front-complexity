import React from 'react';
import styles from './Home.css.js';
import cardTitles from './cardTitles';
import ranking from '../../components/HomeRanking/mock';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeCardList from '../../components/HomeCardList/HomeCardList';
import HomeRanking from '../../components/HomeRanking/HomeRanking';
import { Grid, Paper, Container } from '@material-ui/core';
import HomeToolbar from './HomeToolbar';

function Home() {
  return (
    <Container style={styles.container}>
      <Header page={'HOME'}/>
      <Paper style={styles.paper}>
      <HomeToolbar/>
        <Grid container direction="row">

          <Grid item xs={3}>
            <HomeRanking 
              ranking={ranking}
            />
          </Grid>

          <Grid item xs={8}>
            <HomeCardList 
              cardTitles={cardTitles}
            />
          </Grid>        
        </Grid>
      </Paper>
      <Footer/>
    </Container>
  );
}

export default Home;
