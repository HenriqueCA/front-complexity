import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Description, Submit, Submissions, Ranking } from '../question/components/QuestionComponents';
import problema from '../question/mockQuestion';


class Questions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <>
                <Header/>
                <Footer />
            </>
        )
    }

}

export default Questions;