import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FriendIcon from '../../components/FriendIcon/FriendIcon';
import FriendsCard from '../../components/FriendsCard/FriendsCard';



function Home() {
  return (
    <div className="Home">
    <Header/>
    <p1>Home Page</p1>
    <Footer/>
    </div>
  );
}

export default Home;
