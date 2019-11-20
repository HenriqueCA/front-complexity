import React from 'react';
import styles from './UserStatistics.css';
import { Typography, Container, Tabs, Tab } from '@material-ui/core';
import PercentageChart from './graphs/PercentageChart';
import EloChart from './graphs/EloChart';
import StrengthChart from './graphs/StrengthChart';
import AccuracyChart from './graphs/AccuracyChart';


class UserStatistics extends React.Component {
    chartRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            tabValue: 0,
        }
    }

    handleChange = (event, newValue) => {
        this.setState({ tabValue: newValue });
    }

    showChart = () => {
        const { tabValue } = this.state;
        const { problemsSolved, problemsTried, totalOfSubmissions } = this.props;

        if (tabValue === 0) {
            if (problemsSolved || problemsTried) {
                return <PercentageChart problemsSolved={problemsSolved} problemsTried={problemsTried} />
            } else {
                return <Typography style={{color:'white'}}>Você não tem dados suficientes para serem mostrados !</Typography>
            }
        }
        else if (tabValue === 1) {
            //MOCKED
            const elo = {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                data: [500, 470, 800, 1000, 1200, 1500, 2470, 3240, 3190, 3250, 3275, 3333]

            };
            return <EloChart elo={elo} />
        }
        else if (tabValue === 2) {
            //MOCKED
            const strengths = {
                labels: ['Ad-hoc', 'Strings', 'Data Structures', 'Mathematics', 'Graph', 'DP', 'Greedy'],
                data: [10, 20, 25, 40, 0, 50, 100]
            };
            return <StrengthChart strengths={strengths} />
        }
        else if (tabValue === 3) {
            if (totalOfSubmissions) {
                return <AccuracyChart problemsSolved={problemsSolved} totalOfSubmissions={totalOfSubmissions} />
            } else {
                return <Typography style={{color:'white'}}>Você não tem dados suficientes para serem mostrados !</Typography>
            }
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Tabs value={this.state.tabValue} onChange={this.handleChange} style={styles.tabs}>
                    <Tab label='Questões e Acurácia' />
                    <Tab label='Elo' />
                    <Tab label='Categorias' />
                    <Tab label='Acurácia' />
                </Tabs>
                {this.showChart()}
            </Container>
        );
    }
}

export default UserStatistics;