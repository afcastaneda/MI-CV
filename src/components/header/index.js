import React, { useEffect } from 'react';
import M from 'materialize-css';

//Se genera componente
const Aux = () => {
    useEffect(() => {
        // Inicialización del collapsible cuando el componente se monta
        var elems = document.querySelectorAll('.parallax');
        M.Collapsible.init(elems);
      }, []);

    return(
        <div>
            
            
        </div>
    );
};

//Se exporta el metodo del componente
export default Aux;