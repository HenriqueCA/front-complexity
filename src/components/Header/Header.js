import React from 'react';
import styles from './Header.css.js';
import { Container, Grid, Link, Box, Typography } from '@material-ui/core';

// TODO HREF.
class Header extends React.Component {

    options = () => {
        const logged = true;
        if (logged) {
            return (
                <Grid container direction='column' xs={2} align='center'>
                    <Grid item><Typography variant='h4'>PirateUser</Typography></Grid>
                    <Grid container spacing={0} justify='space-evenly'>
                        <Grid item><Link underline='always'>Perfil</Link></Grid>
                        <Grid item><Link underline='always'>Sair</Link></Grid>
                    </Grid>
                </Grid>
            )
        } else {
            return (
                [
                    <Grid item align='center' xs={1}><Link href="#">Entrar</Link></Grid>,
                    <Grid item xs={1}><Link href="#">Cadastre-se</Link></Grid>
                ]
            )
        }
    }


    navigation = () => {
        const { page } = this.props;
        let pages = ['HOME', 'BLOG', 'CONTESTS', 'QUESTÕES', 'LOJA', 'RANKING', 'SOBRE'];
        let elements = [];
        pages.forEach(e => {
            let link;
            if (e == page) {
                link =
                    <Link style={{ ...styles.link, ...styles.linkCurrent }} href="#" underline='none'>{e}</Link>;
            } else {
                link =
                    <Link style={styles.link} href="#" underline='none'>{e}</Link>;
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
                        <Typography variant='h3'>Complexity</Typography>
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