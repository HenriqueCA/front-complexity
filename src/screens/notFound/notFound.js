import React from 'react';
import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/images/PageNotFound';

const pe = 'https://cdn3.iconfinder.com/data/icons/modifiers-add-on-1/48/v-17-512.png';
const p2 = 'http://petrolina.pe.gov.br/wp-content/uploads/2018/03/404-page-not-found-en.png';
const p3 = 'https://www.404.ie/assets/img/logo_blue.png';
const styles = {
    paddingTop: '10%',
    width: '50%', 
    height: '50%', 
    display: 'block', 
    margin: 'auto', 
    position: 'relative' }
const NotFound = () => {
    return (
        <div>
        <img src={p3} style={styles} />
        <center><Link style={{fontSize: '3vh'}} to="/">Clique para voltar para home</Link></center>
        </div>
    )
};

export default NotFound;