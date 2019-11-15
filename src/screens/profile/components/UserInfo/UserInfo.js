import React from 'react';
import { Button, Container, Box, Paper } from '@material-ui/core';
import UserStatistics from './UserStatistics/UserStatistics';
import UserSubmissions from './UserSubmissions/UserSubmissions';
import UserTeams from './UserTeams/UserTeams';
import UserContests from './UserContests/UserContests';
import UserEditProfile from './UserEditProfile/UserEditProfile';
import UserInventory from './UserInventory/UserInventory';
import styles from './UserInfo.css';
import { NICKNAME } from '../../../../library/util';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Estatísticas'
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
                problemsTried={mud.problemsSubmitted}
                totalOfSubmissions={mud.submissions}
            />;
        }
        else if (display === 'Submissões') {
            let ms = this.props.userData.problemsSubmitted;
            return <UserSubmissions
                submissions={ms}
            />;
        }
        else if (display === 'Times') {
            let mt = this.props.userData.teams;
            return <UserTeams
                teams={mt}
            />;
        }
        else if (display === 'Contests') {
            let mc = this.props.userData.contests;
            return <UserContests
                contests={mc}
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
            if (element === 'Editar Perfil' && this.props.userData.nick !== localStorage.getItem(NICKNAME)) {
                
            } else {
                let button = <Button style={{ marginLeft: '1%', marginRight: '1%' }} variant='contained' onClick={() => this.handleClick(element)}>{element}</Button>;
                content.push(button);
            }

        })

        return content;
    }

    render() {
        return (
            <Container style={{ padding: 0 }}>
                <Box display='flex' justifyContent='center' style={{ padding: '1%' }}>
                    {this.navigationButtons()}
                </Box>
                <Paper style={{ minHeight: '60vh', maxHeight: '60vh', padding: '2%' }}>
                    {this.renderInner()}
                </Paper>
            </Container>
        );
    }
}

export default UserInfo;