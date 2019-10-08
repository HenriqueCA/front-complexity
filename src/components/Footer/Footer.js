import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.css.js';


class Footer extends React.Component {

    github = () => {
        let people = ['henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca', 'henriqueca',];
        let gitlist = []
        people.forEach(e => {
            let git =
                <div style={styles.github}> <FontAwesomeIcon icon={faGithub} /> <a href='#'>{e}</a> </div>;
            gitlist.push(git);
        });

        return gitlist;
    }

    navigation = () => {
        let elements = [];
        let pages = [
            ['Home',[]],
            ['Blog',[]],
            ['Contests',[]],
            ['Loja',[]],
            ['Ranking',[]],
            ['Sobre',[]],
            ['Perfil',['Geral','Submissões','Times','Estatísticas']]
        ];
        let mapPages = new Map(pages);
        
        for(let [key,value] of mapPages){
            let divPage = []
            let mainPage = <a href = "#" style={styles.mainpages}>{key}</a>
            divPage.push(mainPage);
            value.forEach(sub => {
                let subpage = <a href= "#" style={styles.subpages}>{sub}</a>
                divPage.push(subpage);
            });
            let div = React.createElement('div', {}, divPage);
            elements.push(div);

        }
        
        return elements;
    }

    render() {
        return (
            <footer style={styles.footer}>
                <pages style={styles.pages}>
                    {this.navigation()}
                    <div>
                        <p>©Complexity - Online Judge Gamificado</p>
                    </div>
                </pages>

                <div style={styles.git}>
                    {this.github()}
                </div>

            </footer>
        )
    }
};

export default Footer;