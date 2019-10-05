import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component{

    options = () =>{
        const {logged} = this.props;
        if(logged){
            return <div className={styles.options}>
                <h2>PirateUser</h2>
                <a>Perfil</a>
                <a>Sair</a>
            </div>
        }else{
            return <div className={styles.options}>
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
                <li>
                    <a>{e}</a>
                </li>
            }else{
                link =
                <li>
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
            <header className={styles.header}>
                <div className={styles.div}>
                    <h1>Complexity</h1>
                    {options()}
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        {navigation()}
                    </ul>
                </nav>
            </header>
        )
    }
};

export default Header