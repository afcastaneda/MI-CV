import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
//Importo el componente
import Header1 from './components/header'
import Footer1 from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Llamando el componente Header*/}
        <Header1></Header1>
        {/*Llamando el componente Footer*/}

        <p>
          Editando <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacting
        </a>
      </header>
    </div>
  );
}

export default App;
