import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
//Importo el componente
import Header1 from './components/header'
import Footer1 from './components/footer'
import img1 from './components/img/1.jpg';

function App() {
  return (
    <div className="App">
      
      <div className="row">
        <div className="col s2">
          <div className="card">
            <div className="card-image">
              <img src={img1} id='myImage'/>
              <span class="card-title">Andrés Felipe Castañeda</span>
            </div>
            <div class="card-content">
              <p>Mi formación académica, humana y laboral se ha enfocado al desarrollo
                  y la implementación de propuestas útiles en el campo de la
                  productividad e innovación de ideas. Tengo experiencia en manejo de
                  personal. Soy un profesional comprometido con la investigación, el
                  liderazgo y el trabajo en equipo. Soy enfocado al logro, con metas claras
                  y precisas y busco a la mayor brevedad todos los recursos posibles para
                  llegar a ésta.</p>
            </div>
          </div>
          
        </div>
        <div className='col s10'>
        <Footer1/>
        </div>
        
      </div>

      {/*Llamando el componente Header*/}
      
        
        {/*Llamando el componente Footer*/}
      
    </div>
    
  );
}

export default App;
