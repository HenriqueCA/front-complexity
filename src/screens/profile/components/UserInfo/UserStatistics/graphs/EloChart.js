import React from 'react';
import { Typography, Container } from '@material-ui/core';
var Chart = require('chart.js');

export default class EloChart extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        const { elo } = this.props;

        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: 'line',
            data: {
                datasets: [{
                    data: elo.data,
                    borderColor: 'black',
                    fill: false,
                    label: 'Seu Elo'
                }],
                labels: elo.labels,
            },
        });
    }

    render() {
        return (
            <Container>
                <canvas id="myChart" ref={this.chartRef} />
                <Typography>Parabéns! Você está no elo DIAMANTE!</Typography>
            </Container>
        )
    }
}