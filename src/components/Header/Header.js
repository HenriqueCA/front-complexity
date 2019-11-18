import React from 'react';
import styles from './Header.css.js';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import { TOKEN, NICKNAME } from 'library/util';
import { userRoutes } from 'library/routes/backendRequest';
import { Redirect, Link } from 'react-router-dom';
import SnackbarUtil from '../SnackBar/SnackbarUtil.js';


const PAGENOTFINISHED = 'Infelizmente essa página ainda está em construção :(';

class Header extends React.Component {
    
    snackbarRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    options = () => {
        const logged = localStorage.getItem(TOKEN);
        const nickname = localStorage.getItem(NICKNAME);
        if (logged) {
            let item = (<Grid container direction='column' xs={2} align='center'>
                <Grid item>
                    <Typography variant='h4'>
                        {nickname}
                    </Typography>
                </Grid>
                <Grid container spacing={0} justify='space-evenly'>
                    <Grid item>
                        <Link style={styles.headerLinksLogged} to={`/profile/?player=${nickname}`}>
                            Perfil
                    </Link>
                    </Grid>
                    <Grid item>
                        <Link style={styles.headerLinksLogged} onClick={() => this.logout()}>
                            Sair
                    </Link>
                    </Grid>
                </Grid>
            </Grid>);
            return item;
        } else {

            let item = (
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
            return item;
        }
    }

    logout = async () => {
        try {
            await userRoutes.logout();
        }
        catch (error) {
            console.log(error);
        }
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(NICKNAME);
        this.setState({ redirect: true });
    }


    navigation = () => {
        const { page } = this.props;
        const pages = [['HOME', '/'], ['BLOG', '/blog'], ['CONTESTS', '/contests'], ['QUESTÕES', '/problems'], ['LOJA', '/loja'], ['RANKING', '/ranking'], ['SOBRE', '/sobre']];
        let elements = [];
        pages.forEach(e => {
            let link;
            if (e[0] === page) {
                link = (
                    <Link style={{ ...styles.link, ...styles.linkCurrent }} to={e[1]}>
                        {e[0]}
                    </Link>
                );
            } else {
                const linkTo = ['CONTESTS', 'LOJA', 'SOBRE',].includes(e[0]) ? undefined : e[1];
                link = (
                    <Link style={styles.link} to={linkTo} onClick={() => {this.snackbarRef.current.openSnackbar(PAGENOTFINISHED,'info')}}>
                        {e[0]}
                    </Link>
                );
                if (!localStorage.getItem(TOKEN) && e[0] === 'BLOG') {
                    link = (
                        <Link style={styles.link} to={undefined} onClick={() => {this.snackbarRef.current.openSnackbar("Você só pode acessar essa página logado!", 'warn')}}>
                            {e[0]}
                        </Link>
                    )
                }
            }
            elements.push(link);
        });

        return elements;
    }
    

    render() {
        const { redirect } = this.state;
        return (
            <Container style={styles.header}>
                <SnackbarUtil ref={this.snackbarRef}/>
                {redirect ? <Redirect to='/' /> : undefined}
                <Grid container alignItems='center' spacing={0}>
                    <Grid item xs={10}>
                        <Typography variant='h3' style={styles.title}>
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