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
                <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
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