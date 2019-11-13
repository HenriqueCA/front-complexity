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
        this.setState({display: id});
    }


    //otimizar nao renderizando o que ja esta sendo mostrado
    renderInner = () => {
        let { display } = this.state;
        if (display === 'statistics'){
            let mud = this.props.userData;
            return <UserStatistics 
                        problemsSolved={mud.problemsSolved} 
                        problemsTried={mud.problemsTried} 
                        totalOfSubmissions={mud.totalOfSubmissions}
                    />;
        } 
        else if (display === 'submissions'){
            let ms = this.props.userData.submissions;
            return <UserSubmissions 
                        submissions={ms.concat(ms.concat(ms.concat(ms)))}
                    />;
        } 
        else if (display === 'teams'){
            let mt = this.props.userData.teams;
            return <UserTeams 
                        teams={mt.concat(mt.concat(mt.concat(mt)))}
                    />;
        } 
        else if (display === 'contests'){
            let mc = this.props.userData.contests;
            return <UserContests 
                        contests={mc.concat(mc.concat(mc.concat(mc)))}
                    />;
        } 
        else if (display === 'inventory'){
            return <UserInventory/>;
        } 
        else if (display === 'editProfile'){
            return <UserEditProfile 
                        uData={this.props.userData}
                    />;
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

export default UserInfo;