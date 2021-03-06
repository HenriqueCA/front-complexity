import React from 'react';
import styles from './HomeRanking.css';
import { Typography, Paper } from '@material-ui/core';

import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';


function createData(posicao, nick) {
    return {posicao, nick};
  }

const rows = [
    createData(1, 'flaviorpqf'),
    createData(2, 'athilambb'),
    createData(3, 'henriqueca'),
    createData(4, 'alexandrerf'),
    createData(5, 'flaviorpqf'),
    createData(6, 'athilambb'),
    createData(7, 'henriqueca'),
    createData(8, 'alexandrerf'),
    createData(9, 'flaviorpqf'),
    createData(10, 'flaviorpqf')
  ];

const HomeRanking = () => {
    return (
        <Paper style={styles.sizePaper}>
        <Typography style={styles.ranking}>
          Top 10 Players
        </Typography>
          <Table style={styles.size} aria-label="simple table">
            <TableHead>
              <TableRow style={styles.head}>
                <TableCell align='center' style={styles.headPadding}>Posição</TableCell>
                <TableCell align='center' style={styles.headPadding}>Nick</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow styles={styles.row} key={row.posicao}>
                  <TableCell align='center' style={styles.padding}> {row.posicao} </TableCell>
                  <TableCell align='center' style={styles.padding}>{row.nick}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
}


export default HomeRanking;