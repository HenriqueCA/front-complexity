import React from 'react';
import { Container, Typography } from '@material-ui/core';
var Chart = require('chart.js');

export default class StrengthChart extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        const { strengths } = this.props;
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: 'radar',
            data: {
                datasets: [{
                    data: strengths.data,
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,99,132,0.5)',
                }],
                labels: strengths.labels,
            },
            options: {
                legend: {
                    display: false
                }
            }
        });
    }

    tips = () => {
        const { strengths } = this.props;
        const tags = this.getLowestAndGreater(strengths);
        return <Typography>
            A categoria de questões que você mais resolveu foi {tags.greatestTag}, e a categoria que menos resolveu foi {tags.lowestTag}.
        </Typography>

    }

    getLowestAndGreater = (strengths) => {
        let data = strengths.data;
        let lowest = 1000000;
        let greatest = -1;
        let lowestTag = '';
        let greatestTag = '';
        for (let i = 0; i < data.length; i++) {
            if (data[i] > greatest) {
                greatest = data[i];
                greatestTag = strengths.labels[i];
            }

            if (data[i] < lowest) {
                lowest = data[i];
                lowestTag = strengths.labels[i];
            }
        }

        return { lowestTag, greatestTag }
    }

    render() {
        return (
            <Container>
                <canvas id="myChart" ref={this.chartRef} />
                {this.tips()}
            </Container>
        )
    }
}