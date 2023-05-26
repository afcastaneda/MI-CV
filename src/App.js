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
      
      {/*Llamando el componente Header*/}
      <Header1></Header1>
        <div className="card">
          <div className="card-content"></div>
          <h2>Probando</h2>
        </div>
        
        {/*Llamando el componente Footer*/}
      <Footer1/>
    </div>
    
  );
}

export default App;
