import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Grid, Link, Typography, Box } from '@material-ui/core';
import styles from './Footer.css.js';


class Footer extends React.Component {

    github = () => {
        let people = ['henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca',];
        let gitlist = []
        people.forEach(e => {
            let git =
                <Link href="#">
                    <FontAwesomeIcon style={styles.github} icon={faGithub} />
                    {e}
                </Link>;
            gitlist.push(git);
        });

        return gitlist;
    }

    navigation = () => {
        let elements = []
        let pages = [
            ['Home', []],
            ['Blog', []],
            ['Contests', []],
            ['Loja', []],
            ['Ranking', []],
            ['Sobre', []],
            ['Perfil', ['Geral', 'Submissões', 'Times', 'Estatísticas']]
        ];
        const mapPages = new Map(pages);

        for (let [key, value] of mapPages) {
            let divPage = [];
            const mainPage = (
                <Grid item>
                    <Link href="#">
                        {key}
                    </Link>
                </Grid>
            );
            divPage.push(mainPage);
            value.forEach(sub => {
                const subpage = (
                    <Grid item>
                        <Link href="#" >
                            {sub}
                        </Link>
                    </Grid>
                );
                divPage.push(subpage);
            });
            const gridContainer = (
                <Grid container xs={1} direction='column'>
                    {divPage}
                </Grid>
            );
            elements.push(gridContainer);
        }

        return elements;
    }

    render() {
        return (
            <Container style={styles.footer}>
                <Grid container spacing={0} justify='space-evenly' align='center'>
                    {this.navigation()}
                    <Grid item>
                        <Typography>
                            ©Complexity - Online Judge Gamificado
                        </Typography>
                    </Grid>
                </Grid>
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                    {this.github()}
                </Box>
            </Container>
        )
    }
};

export default Footer;