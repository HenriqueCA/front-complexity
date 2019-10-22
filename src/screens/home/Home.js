import React from 'react';
import './Home.css';
import mock from '../../components/CardList/mock.js';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardList from '../../components/CardList/CardList';



function Home() {
  return (
    <div className="Home">
    <Header/>
    <p1>Home Page</p1>
    <CardList friendsList={mock}/>
    <Footer/>
    </div>
  );
}

export default Home;
