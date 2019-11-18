import React from 'react';
import styles from './HomeCard.css';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles, fade } from '@material-ui/core/styles';
import SnackbarUtil from '../../components/SnackBar/SnackbarUtil';
import {primaryColor} from 'resources/colors/appColors';

const PAGENOTFINISHED = 'Infelizmente essa página ainda está em construção :(';

const map = {
    'Questões': '/problems',
    'Blog': '/blog',
    'Contests': '/contests',
    'Loja': '/store',
    'Ranking': '/ranking',
    'Sobre': '/about',
    'Criar Questão': '/create'
}

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: '100%',
        height: '100%',
        justifyContent: 'left',
        backgroundColor: fade(primaryColor, 0.5),
        '&:hover': {
            backgroundColor: fade(primaryColor, 0.9)
        }
    },
    input: {
        display: 'none',
    },
}));

const HomeCard = ({ title, url }) => {
    const classes = useStyles();
    const snackbarRef = React.createRef();
    const linkTo = ['Contests', 'Loja', 'Sobre', 'Criar Questão'].includes(title) ? undefined : map[title];

    return (
        <>
            <SnackbarUtil ref={snackbarRef} />
            <Link to={linkTo} style={styles.link} onClick={() => { snackbarRef.current.openSnackbar(PAGENOTFINISHED, 'info') }}>
                <Button variant="outlined" className={classes.button}>
                    <img style={styles.img} src={url} alt='Imagem' />
                    <Typography style={{ overflow: 'hidden' }}>{title}</Typography>
                </Button>
            </Link>
        </>
    );

};


export default HomeCard;