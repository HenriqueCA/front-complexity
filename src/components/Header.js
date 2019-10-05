import React from 'react';
import { optionalCallExpression } from '@babel/types';

class Header extends React.Component{

    options = () =>{
        const {logged} = this.props;
        if(logged){
            return <div style={{gridColumn:6, alignSelf:'center'}}>
                <h2>PirateUser</h2>
                <a>Perfil</a>
                <a>Sair</a>
            </div>
        }else{
            return <div style={{gridColumn:6, alignSelf:'center'}}>
                <a>Entrar</a>
                <a>Cadastre-se</a>
            </div>
        }
    }

    render(){
        const {options} = this;
        return(
            <header style={{width:'100%', backgroundColor:'darkblue'}}>
                <div style={{display:'grid', gridTemplateColumns: 'repeat(6,1fr)'}}>
                    <h1 style={{gridColumn: 1}}>Complexity</h1>
                    {options()}
                </div>
                <nav style={{backgroundColor:'grey', padding:'0.5%'}}>
                    <ul style={{margin:0,listStyleType:'none', display:'grid', gridTemplateColumns: 'repeat(7,1fr)'}}>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Contests</li>
                        <li>Questões</li>
                        <li>Loja</li>
                        <li>Ranking</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
            </header>
        )
    }
};

export default Header