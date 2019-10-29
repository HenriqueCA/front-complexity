import React from 'react';
import mockFriends from './mockFriends.js';
import mockUser from './mockUser';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import CardList from '../../components/CardList/CardList';
import { Container, Grid, Box } from '@material-ui/core';
import styles from './profile.css';
import UserInfo from '../../components/UserInfo/UserInfo';

function Profile() {
  return (
    <div className="Profile">
      <Header/>
      
      <Container >
        <Box display='flex' flexDirection='row' style={styles.padding}>         
          <ProfilePicture url="https://www.midlands4cities.ac.uk/wp-content/uploads/2019/04/student-profile-default.png"/>
          <ProfileHeader uData={mockUser}/>
        </Box>
        
        <Grid container direction='row' style={styles.size} style={styles.paddingTopBottom}>
          
          <Grid item style={styles.paddingRight}>
            <CardList friendsList={mockFriends}/>
          </Grid>
          
          <Grid item style={styles.paddingLeft}> 
            <UserInfo/>
          </Grid>
  
        </Grid>
      </Container>
      

      <Footer/>
    </div>
  );
}

export default Profile;
