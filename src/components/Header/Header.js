import React from 'react';
import styles from './Header.css.js';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { TOKEN, NICKNAME } from 'library/util';
import { userRoutes } from 'library/routes/backendRequest';
import { Redirect, Link } from 'react-router-dom';

class Header extends React.Component {

    options = () => {
        const logged = localStorage.getItem(TOKEN);
        const nickname = localStorage.getItem(NICKNAME);
        if (logged) {
            return (
                <Grid container direction='column' xs={2} align='center'>
                    <Grid item>
                        <Typography variant='h4'>
                            {nickname}
                        </Typography>
                    </Grid>
                    <Grid container spacing={0} justify='space-evenly'>
                        <Grid item>
                            <Link style={styles.headerLinksLogged} to={`/profile/?player=${NICKNAME}`}>
                                Perfil
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link style={styles.headerLinksLogged} onPress={this.logout()}>
                                Sair
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            )
        } else {
            return (
                [
                    (
                        <Grid item align='center' xs={1}>
                            <Link style={styles.headerLinks} to="/login">
                                Entrar
                            </Link>
                        </Grid>
                    ),
                    (
                        <Grid item xs={1}>
                            <Link style={styles.headerLinks} to="/signup">
                                Cadastre-se
                            </Link>
                        </Grid>
                    )
                ]
            )
        }
    }

    logout = async () => {
        await userRoutes.logout();
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(NICKNAME);
        return <Redirect to='/' />;
    }


    navigation = () => {
        const { page } = this.props;
        const pages = [['HOME', '/'], ['BLOG', '/blog'], ['CONTESTS', '/contests'], ['QUESTÕES', '/questoes'], ['LOJA', '/loja'], ['RANKING', '/ranking'], ['SOBRE', '/sobre']];
        let elements = [];
        pages.forEach(e => {
            let link;
            if (e === page) {
                link = (
                    <Link style={{ ...styles.link, ...styles.linkCurrent }} to={e[1]}>
                        {e[0]}
                    </Link>
                );
            } else {
                link = (
                    <Link style={styles.link} to={e[1]}>
                        {e[0]}
                    </Link>
                );
            }
            elements.push(link);
        });

        return elements;
    }

    render() {
        return (
            <Container style={styles.header}>
                <Grid container alignItems='center' spacing={0}>
                    <Grid item xs={10}>
                        <Typography variant='h3'>
                            Complexity
                        </Typography>
                    </Grid>
                    {this.options()}
                </Grid>
                <Box display='flex' flexDirection='row' justifyContent='center'>
                    {this.navigation()}
                </Box>
            </Container>
        )
    }
};

export default Header;