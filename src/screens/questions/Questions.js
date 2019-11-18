import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import ListQuestions from './components/ListQuestions';
import styles from './Questions.css';


class Questions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <Container>
                <Header/>
                    <ListQuestions/>
                <Footer/>
            </Container>
        
        )
    }

}

export default Questions;