import React, { useEffect } from 'react';
import M from 'materialize-css';

const Aux2 = () => {
    useEffect(() => {
        // Inicialización del collapsible cuando el componente se monta
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
      }, []);

    return(
        <div>
            <ul className="collapsible">
                <li>
                <div class="collapsible-header"><i class="material-icons">account_balance</i>Formación académica</div>
                <div class="collapsible-body">
                    <span>
                        <div class="collection">
                            <a href="#!" class="collection-item active">INGENIERÍA EN SISTEMAS Y TELECOMUNICACIONES
                            <br />
                            6to Semestre
                            <br />
                            Universidad de Manizales
                            </a>
                            <a href="#!" class="collection-item">TECNÓLOGO EN SISTEMAS INFORMÁTICOS
                            <br />
                            Culminado 2019
                            <br />
                            Universidad de Caldas
                            </a>
                            <a href="#!" class="collection-item">Alan</a>
                            <a href="#!" class="collection-item">Alan</a>
                        </div>
                    </span>
                </div>
                </li>
                <li>
                <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
        </div>        
    );
};

export default Aux2;