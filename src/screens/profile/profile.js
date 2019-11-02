import React from 'react';
import mockUser from '../../mock/user';
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
          <ProfilePicture url={mockUser.picture}/>
          <ProfileHeader uData={mockUser}/>
        </Box>
        
        <Grid container direction='row' style={styles.size} style={styles.paddingTopBottom}>
          
          <Grid item style={styles.paddingRight}>
            <CardList friendsList={mockUser.friends.concat(mockUser.friends.concat(mockUser.friends.concat(mockUser.friends.concat(mockUser.friends))))}/>
          </Grid>
          
          <Grid item style={styles.paddingLeft}> 
            <UserInfo userData={mockUser}/>
          </Grid>
  
        </Grid>
      </Container>
      

      <Footer/>
    </div>
  );
}

export default Profile;
