import React from 'react';
import './Home.css';
import cardTitles from './cardTitles';
import ranking from '../../components/HomeRanking/mock';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeCardList from '../../components/HomeCardList/HomeCardList';
import HomeRanking from '../../components/HomeRanking/HomeRanking';
import { Grid } from '@material-ui/core';

function Home() {
  return (
    <div className="Home">
      <Header/>
      <p>Home Page</p>
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
      <Footer/>
    </div>
  );
}

export default Home;
