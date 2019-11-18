import React from 'react';
import styles from './HomeCard.css';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { makeStyles, fade } from '@material-ui/core/styles';
const map = {
    'Questões' : '/problems',
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
      justifyContent:'left',
      backgroundColor: fade('#D1D1D1', 0.5),
      '&:hover': {
        backgroundColor: fade('#D1D1D1', 0.9)
      }
    },
    input: {
      display: 'none',
    },
  }));

const HomeCard = ({title, url}) => {
    const classes = useStyles();
    return (
        <Link to={map[title]} style={styles.link}>
            {/* <Card style={styles.card}>
                <CardContent>
                    <img style={styles.img} src={url}/>
                    <Typography>
                        {title}
                    </Typography>
                </CardContent>
            </Card> */}
            <Button variant="outlined" className={classes.button}>
                <img style={styles.img} src={url} alt='Imagem'/>
                <Typography style={{overflow:'hidden'}}>{title}</Typography>
            </Button>
        </Link>
    );

};


export default HomeCard;