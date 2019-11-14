import React from 'react';
import styles from './HomeCard.css';
import { CardContent, Typography, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';

const map = {
    'Questões' : '/problems',
    'Blog': '/blog',
    'Contests': '/contests',
    'Loja': '/store',
    'Ranking': '/ranking',
    'Sobre': '/about'
}

const HomeCard = ({title, url}) => {

    return (
        <Link to={map[title]} style={styles.link}>
            <Card style={styles.card}>
                <CardContent>
                    <img style={styles.img} src={url}/>
                    <Typography>
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );

};


export default HomeCard;