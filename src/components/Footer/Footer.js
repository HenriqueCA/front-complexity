import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import styles from './Footer.css.js';
import {Link} from 'react-router-dom';
import { NICKNAME } from '../../library/util.js';
import SnackbarUtil from '../../components/SnackBar/SnackbarUtil';

const PAGENOTFINISHED = 'Infelizmente essa página ainda está em construção :(';

class Footer extends React.Component {

    snackbarRef = React.createRef();

    github = () => {
        let people = [
            ['HenriqueCA', 'https://github.com/HenriqueCA'],
            ['quirinoflavio', 'https://github.com/quirinoflavio'],
            ['AthilaMatheusBorges', 'https://github.com/AthilaMatheusBorges'],
            ['ANKerD', 'https://github.com/ANKerD'],
            ['EduardoMCF', 'https://github.com/EduardoMCF'],
            ['wesleymonte', 'https://github.com/wesleymonte'],
            ['JonathanAllisson', 'https://github.com/JonathanAllisson'],
            ['alexandrerf3', 'https://github.com/alexandrerf3'],
            ['JoaoMLima', 'https://github.com/JoaoMLima'],
            ['Gasparsa', 'https://github.com/Gasparsa']
        ]
        let gitlist = []
        people.forEach(e => {
            let git =
                <a style={styles.git} href={e[1]}>
                    <FontAwesomeIcon style={styles.github} icon={faGithub} />
                    {e[0]}
                </a>;
            gitlist.push(git);
        });

        return gitlist;
    }

    navigation = () => {
        let elements = []
        let pages = [
            [['Home', '/'], []],
            [['Blog', '/blog'], []],
            [['Contests', '/contests'], []],
            [['Questões','/problems'],[]],
            [['Loja', '/loja'], []],
            [['Ranking', '/ranking'], []],
            [['Sobre', '/sobre'], []],
            [['Perfil', `/profile/?player=${localStorage.getItem(NICKNAME)}`], []]//, [['Submissões', '/profile/submissoes'], ['Times', '/profile/times'], ['Contests', '/profile/contests'], ['Inventário', '/profile/inventario'], ['Editar Perfil', '/profile/edit']]],
        ];
        const mapPages = new Map(pages);

        for (let [key, value] of mapPages) {
            let divPage = [];
            const linkTo = ['Sobre','Loja','Contests'].includes(key[0]) ? undefined : key[1];
            const mainPage = (
                <Grid item>
                    <Link style={styles.footerLinks} to={linkTo} onClick={() => {this.snackbarRef.current.openSnackbar(PAGENOTFINISHED,'info')}}>
                        {key[0]}
                    </Link>
                </Grid>
            );
            divPage.push(mainPage);
            value.forEach(sub => {
                const subpage = (
                    <Grid item>
                        <Link style={styles.footerLinks} to={sub[1]} >
                            {sub[0]}
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
                <SnackbarUtil ref={this.snackbarRef} />
                <Grid container spacing={0} justify='space-evenly' align='center' style={styles.pagesContainer}>
                    {this.navigation()}
                    <Grid item>
                        <Typography>
                            ©Complexity - Online Judge Gamificado
                        </Typography>
                        <Typography>Sem fins lucrativos</Typography>
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