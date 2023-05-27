import React, { useEffect } from 'react';
import M from 'materialize-css';

const Aux2 = () => {
    useEffect(() => {
        // Inicialización del collapsible cuando el componente se monta
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
      }, []);

    return(
        <div className=''>
            <ul className="collapsible teal lighten-2">
                <li>
                    <div class="collapsible-header teal lighten-4"><i class="material-icons">account_balance</i>Formación académica</div>
                    <div class="collapsible-body ">
                        <span>
                            <div class="collection">
                                <a href="#!" class="collection-item active"><b>INGENIERÍA EN SISTEMAS Y TELECOMUNICACIONES</b>
                                <br />
                                6to Semestre
                                <br />
                                Universidad de Manizales
                                </a>
                                <a href="#!" class="collection-item"><b>TECNÓLOGO EN SISTEMAS INFORMÁTICOS</b>
                                <br />
                                Culminado 2019
                                <br />
                                Universidad de Caldas
                                </a>
                                <a href="#!" class="collection-item"><b>DIPLOMADO MISION TIC FUNDAMENTOS DE PROGRAMACIÓN</b>
                                <br />
                                Culminado 2022
                                <br />
                                Ministerio de las Telecomunicaciones - Universidad Tecnológica de Pereira
                                </a>
                                <a href="#!" class="collection-item"><b>BACHILLER ACADÉMICO CON ÉNFASIS EN MERCADEO</b>
                                <br />
                                Culminado 2009
                                <br />
                                Colegio Eugenio Pacelli
                                </a>
                            </div>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="collapsible-header teal lighten-4"><i class="material-icons">work</i>Experiencia Profesional</div>
                    <div class="collapsible-body">
                        <span>
                        <div class="collection">
                                <a href="#!" class="collection-item active"><b>Consultor de automatización</b>
                                <br />
                                Comdata -  Konecta 7 meses - actualmente
                                <br />
                                <p>Revisar y garantizar todo el proceso de trascodificacion y transcripción
                                de los segmentos que actualmente se tienen a cargo en el área, revisar el
                                funcionamiento correcto y dar soporte a los diferentes bots de descarga
                                y carga de llamadas que se tienen, realizar diferentes desarrollos según
                                las necesidades del area.</p>
                                </a>
                                <a href="#!" class="collection-item"><b>Consultor de Analytics</b>
                                <br />
                                Comdata Group 18 meses
                                <br />
                                <p>Por medio de herramientas de business intelligence, servicios de cloud
                                computing y diferentes lenguajes de programación se elaboran
                                dashboards que permiten realizar una labor de consultoría aportando a
                                los clientes una correcta toma de decisiones y/o acciones a nivel
                                operativo buscando incrementar indicadores de gestión, de atención y de
                                calidad.</p>
                                </a>
                                <a href="#!" class="collection-item"><b>Reporting</b>
                                <br />
                                UNO27 12 meses
                                <br />
                                <p>Creación, diseño y ejecución de pago de comisiones acorde al
                                rendimiento de los empleados, elaboración de informes periódicos sobre
                                rendimiento de servicios de ventas y atención al cliente con el fin de
                                detectar falencias y crear alarmas operativas, control de personal,
                                creación y ejecución de planes de acción para incrementar productividad
                                e indicadores de rendimiento.</p>
                                </a>
                                <a href="#!" class="collection-item"><b>Técnico de conducción</b>
                                <br />
                                Emergia 24 meses
                                <br />
                                <p>Elaboración de informes periódicos sobre rendimiento de los empleados
                                para una entidad financiera, manejo de personal, creación de alertas
                                operativas, diseño y ejecución de planes de acción para incrementar
                                productividad e indicadores de rendimiento.</p>
                                </a>
                            </div>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="collapsible-header teal lighten-4"><i class="material-icons">whatshot</i>Contacto</div>
                    <div class="collapsible-body">
                        <span>
                            <div class="row ">
                                <form class="col s12 teal lighten-5">
                                <div class="row ">
                                    <div class="input-field col s6">
                                    <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                                    <label for="first_name">First Name</label>
                                    </div>
                                    <div class="input-field col s6">
                                    <input id="last_name" type="text" class="validate"/>
                                    <label for="last_name">Last Name</label>
                                    </div>
                                </div>                                
                                <div class="row">
                                    <div class="input-field col s6">
                                    <input id="password" type="password" class="validate"/>
                                    <label for="password">Asunto</label>
                                    </div>
                                    <div class="input-field col s6">
                                    <input id="last_name" type="text" class="validate"/>
                                    <label for="last_name">Mensaje</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                    <input id="email" type="email" class="validate"/>
                                    <label for="email">Email</label>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </span>
                    </div>
                </li>
            </ul>
        </div>        
    );
};

export default Aux2;