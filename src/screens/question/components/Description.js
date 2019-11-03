import React, { Component } from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';

const Description = ({ description, samples }) => {
    function examples() {
        let content = []
        samples.forEach(element => {
            let ex = (
                <>
                    <Grid item xs={6}>
                        <Paper>
                            {element.input}
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            {element.output}
                        </Paper>
                    </Grid>
                </>
            );
            content.push(ex);
        });
        return content;
    }
    return (
        <Container>
            <Typography>{description}</Typography>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Typography>Input</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Output</Typography>
                </Grid>
                {samples ? examples() : undefined}
            </Grid>
        </Container>
    )
};

export { Description };