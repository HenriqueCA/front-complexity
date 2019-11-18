import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import CardList from './components/CardList/CardList';
import { Container, Box } from '@material-ui/core';
import styles from './profile.css';
import UserInfo from './components/UserInfo/UserInfo';
import userRoutes from '../../library/routes/userRoutes';
import { NICKNAME } from '../../library/util';
import SnackbarUtil from '../../components/SnackBar/SnackbarUtil';

const PROFILENOTFOUND = 'Não encontramos o perfil do usuário que você está procurando...';

class Profile extends React.Component {

  snackbarRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      profile: undefined
    }
  }

  async componentDidMount() {
    let url = window.location.href;
    url = new URL(url);
    const player = url.searchParams.get("player");
    try {
      let response;

      if (localStorage.getItem(NICKNAME) === player) {
        response = await userRoutes.getMyProfile();
      } else {
        response = await userRoutes.getProfile(player);
      }
      this.setState({ profile: response.data.profile });
    } catch (error) {
      this.snackbarRef.current.openSnackbar(PROFILENOTFOUND, 'error');
    }
  }

  render() {

    const player = this.state.profile;

    return (
      <>
      <SnackbarUtil ref={this.snackbarRef} />
        <Header />
        <Container style={styles.profileContainer} >
          <Box display='flex'>
            <Box display='flex' flexDirection='column' alignItems='center' style={styles.avatarAndFriendsContainer}>
              {player ? (<><ProfilePicture url={player.photo} /><CardList friendsList={player.friends} /> </>) : undefined}
            </Box>
            <Box display='flex' flexDirection='column' style={styles.infoContainer}>
              {player
                ? (<><ProfileHeader uData={player} /> <UserInfo userData={player} /></>) : undefined}
            </Box>
          </Box>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Profile;
