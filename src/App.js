import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Header logged page='Home'></Header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>


      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
