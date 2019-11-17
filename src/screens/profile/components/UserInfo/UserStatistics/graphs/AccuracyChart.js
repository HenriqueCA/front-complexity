import React from 'react';
import { Container, Typography } from '@material-ui/core';
var Chart = require('chart.js');

export default class PieChart extends React.Component {
    ChartRef = React.createRef();

    componentDidMount() {
        const { problemsSolved, totalOfSubmissions } = this.props;

        const myChartRef = this.ChartRef.current.getContext("2d");
        new Chart(myChartRef,
            {
                type: 'pie',
                data: {
                    datasets: [
                        {
                            data: [problemsSolved, totalOfSubmissions],
                            backgroundColor: ['green', 'black'],
                        }
                    ],
                    labels: ['Problemas Resolvidos', 'Total de submissões']
                }
            });
    }

    render() {
        const { problemsSolved, totalOfSubmissions } = this.props;
        return (
            <Container>
                <canvas id="myChart" ref={this.ChartRef} />
                <Typography>Você tem uma acurácia de {(problemsSolved / totalOfSubmissions * 100).toFixed(2)}%!</Typography>
            </Container>
        )
    }
}