import React from 'react';
import styles from './Header.css.js';

class Header extends React.Component{

    options = () =>{
        const {logged} = this.props;
        if(logged){
            return <div style={styles.options}>
                <h2>PirateUser</h2>
                <a>Perfil</a>
                <a>Sair</a>
            </div>
        }else{
            return <div style={styles.options}>
                <a>Entrar</a>
                <a>Cadastre-se</a>
            </div>
        }
    }

    navigation = () => {
        const {page} = this.props;
        let pages = ['Home','Blog','Contests','Questões','Loja','Ranking','Sobre'];
        let elements = [];
        pages.forEach(e => {
            let link;
            if(e == page){
                link =
                <li style={{...styles.li, ...styles.liPage}}>
                    <a>{e}</a>
                </li>
            }else{
                link =
                <li style = {styles.li}>
                    <a>{e}</a>
                </li>
            }
            elements.push(link)
        });

        return elements;
    }

    render(){
        const {options, navigation} = this;
        return(
            <header style={styles.header}>
                <div style={styles.div}>
                    <h1>Complexity</h1>
                    {options()}
                </div>
                    <ul style={styles.ul}>
                        {navigation()}
                    </ul>
            </header>
        )
    }
};

export default Header