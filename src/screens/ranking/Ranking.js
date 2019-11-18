import React from 'react';
import RankingTable from './RankingTable';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ranking from './mock';
import { Container } from '@material-ui/core';
import styles from './Ranking.css';

function createData(position, nick, problems, level) {
    return { position, nick, problems, level};
}

const headCells = [
    { id: 'position', numeric: false, disablePadding: false, label: 'Posição' },
    { id: 'nick', numeric: false, disablePadding: false, label: 'Nick' },
    { id: 'problems', numeric: true, disablePadding: false, label: 'Problemas' },
    { id: 'level', numeric: true, disablePadding: false, label: 'Nível' }
];

const rows = (players) =>  {
    return players.map( (player) => {
        return createData(undefined, player.nick, player.problems, player.level)
    });
}

const Ranking = () => {
    return (
        <Container style={styles.container}>
            <Header/>
            <Container style={{padding:0, minHeight:'80vh'}}>
                <RankingTable rows={ rows(ranking) } headCells={ headCells }/>
                </Container>
            <Footer/>
        </Container>
    );
    
}
export default Ranking;