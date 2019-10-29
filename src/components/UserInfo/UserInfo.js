import React from 'react';
import { Button, Container, Box } from '@material-ui/core';
import UserStatistics from './UserStatistics/UserStatistics';
import UserSubmissions from './UserSubmissions/UserSubmissions';
import UserTeams from './UserTeams/UserTeams';
import UserContests from './UserContests/UserContests';
import UserEditProfile from './UserEditProfile/UserEditProfile';
import UserInventory from './UserInventory/UserInventory';
import styles from './UserInfo.css';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'statistics'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const id = event.target.getAttribute('id');
        if(id === 'statistics') this.setState({display: 'statistics'});
        else if(id === 'submissions') this.setState({display: 'submissions'});
        else if(id === 'teams') this.setState({display: 'teams'});
        else if(id === 'contests') this.setState({display: 'contests'});
        else if(id === 'inventory') this.setState({display: 'inventory'});
        else if(id === 'editProfile') this.setState({display: 'editProfile'});
    }


    renderInner() {
        let { display } = this.state;
        if ((display) === 'statistics'){
            return <UserStatistics/>;
        } else if (display === 'submissions'){
            return <UserSubmissions/>;
        } else if (display === 'teams'){
            return <UserTeams/>;
        } else if (display === 'contests'){
            return <UserContests/>;
        } else if (display === 'inventory'){
            return <UserInventory/>;
        } else if (display === 'editProfile'){
            return <UserEditProfile/>;
        } 
    }

    render() {
        return (
            <Container style={styles.size}>
              <button onClick={this.handleClick} id='statistics'>Estatísticas</button>
              <button onClick={this.handleClick} id='submissions'>Submissões</button>
              <button onClick={this.handleClick} id='teams'>Times</button>
              <button onClick={this.handleClick} id='contests'>Contests</button>
              <button onClick={this.handleClick} id='inventory'>Inventário</button>
              <button onClick={this.handleClick} id='editProfile'>Editar Perfil</button>
              
              {this.renderInner()}
            </Container>
          );
    }
}

// const UserInfo = () => {
//     return(
//         <Container>
//             <Box display='flex'>
//                 <Button>
//                     Estatísticas
//                 </Button>
//                 <Button>
//                     Submissões
//                 </Button>
//             </Box>
//         </Container>
//     );
// }

export default UserInfo;