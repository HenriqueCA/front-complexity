import React from 'react';
import { Button, Container, Box, Paper } from '@material-ui/core';
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
            display: 'Editar Perfil'
        };

    }

    handleClick = (name) => {
        this.setState({ display: name });
    }


    renderInner = () => {
        let { display } = this.state;
        if (display === 'Estatísticas') {
            let mud = this.props.userData;
            return <UserStatistics
                problemsSolved={mud.problemsSolved}
                problemsTried={mud.problemsTried}
                totalOfSubmissions={mud.totalOfSubmissions}
            />;
        }
        else if (display === 'Submissões') {
            let ms = this.props.userData.submissions;
            return <UserSubmissions
                submissions={ms.concat(ms.concat(ms.concat(ms)))}
            />;
        }
        else if (display === 'Times') {
            let mt = this.props.userData.teams;
            return <UserTeams
                teams={mt.concat(mt.concat(mt.concat(mt)))}
            />;
        }
        else if (display === 'Contests') {
            let mc = this.props.userData.contests;
            return <UserContests
                contests={mc.concat(mc.concat(mc.concat(mc)))}
            />;
        }
        else if (display === 'Inventário') {
            return <UserInventory />;
        }
        else if (display === 'Editar Perfil') {
            return <UserEditProfile
                uData={this.props.userData}
            />;
        }
    }

    navigationButtons = () => {
        const navigations = ['Estatísticas', 'Submissões', 'Times', 'Inventário', 'Contests', 'Editar Perfil'];

        let content = []

        navigations.forEach(element => {
            let button = <Button style={{marginLeft:'1%',marginRight:'1%'}} variant='contained' onClick={() => this.handleClick(element)}>{element}</Button>;
            content.push(button);
        })

        return content;
    }

    render() {
        return (
            <Container style={{ padding: 0 }}>
                <Box display='flex' justifyContent='center' style={{ padding: '1%' }}>
                    {this.navigationButtons()}
                </Box>
                <Paper style={{minHeight:'40vh', padding:'2%'}}>
                {this.renderInner()}
                </Paper>
            </Container>
        );
    }
}

export default UserInfo;