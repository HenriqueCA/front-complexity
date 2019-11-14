import React from 'react';
import mockUser from '../../mock/user';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import CardList from './components/CardList/CardList';
import { Container, Box } from '@material-ui/core';
import styles from './profile.css';
import UserInfo from './components/UserInfo/UserInfo';

function Profile() {
  return (
    <div className="Profile">
      <Header />

      <Container style={styles.profileContainer} >
        <Box display='flex'>
          <Box display='flex' flexDirection='column' alignItems='center' style={{flex:1}}>
            <ProfilePicture url={mockUser.picture} />
            <CardList friendsList={mockUser.friends.concat(mockUser.friends.concat(mockUser.friends.concat(mockUser.friends.concat(mockUser.friends))))} />
          </Box>
          <Box display='flex' flexDirection='column' style={styles.infoContainer}>
            <ProfileHeader uData={mockUser} />
            <UserInfo userData={mockUser} />
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
