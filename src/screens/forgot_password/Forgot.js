import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import styles from './Forgot.css.js';


class Forgot extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text : '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.setState({text:'Uma nova senha será enviada para seu email'});
    }

    render() {
        const {text} = this.state;
        return (
            <>
                <Header />
                <div style={styles.div}>
                    <h1>Esqueci minha senha</h1>
                    <input style={styles.input} type="text" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit} style={styles.button}>Enviar</button>
                    <p>{text}</p>
                </div>
                <Footer />
            </>
        )
    }
};

export default Forgot;