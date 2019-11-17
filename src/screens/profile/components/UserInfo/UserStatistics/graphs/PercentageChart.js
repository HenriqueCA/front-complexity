import React from 'react';
import { Container, Typography } from '@material-ui/core';
var Chart = require('chart.js');

export default class PercentageChart extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        const { problemsSolved, problemsTried } = this.props;
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [problemsSolved, problemsTried - problemsSolved],
                    backgroundColor: ['green', 'black'],
                }],
                labels: ['Problemas resolvidos', 'Problemas não resolvidos'],
            },
        });
    }

    render() {
        const { problemsSolved, problemsTried } = this.props;
        return (
            <Container>
                <canvas id="myChart" ref={this.chartRef} />
                <Typography>Você tem um total de {problemsTried} problemas tentados e resolveu {(problemsSolved / problemsTried * 100).toFixed(2)}% deles</Typography>
            </Container>
        )
    }
}