import React from "react";
import { Router } from "react-router-dom";

export const Footer = () => {
    return(
        <>
        <hr></hr>
            <footer className="footer">

                <div className="texto">
         
                    <div className="container-izq">
                        <div>
                            <img id="logo_a" src= "/logo.png" alt="Logo"/> 
                            <div>
                                Conéctate con nosotros
                                <div className="rs">
                                    <img id="insta" src="/instafoto.webp" alt="ig"></img>
                                    <img id="face" src="/facebook.png" alt="fb"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="productos">
                            <ul>
                                <li id="titulo">Nuestros Productos</li>
                                <li>Personales</li>
                                <li>Familiares</li>
                                <li>Banquetes</li>
                                <li>Sandwiches</li>
                            </ul>
                      
                    </div>
    
                <div className="ayuda">
                    <ul>
                        <li id="titulo">Ayuda</li>
                        <li>Comprobante Electrónico</li>
                        <li>Política de Datos Personales</li>
                        <li>Términos y Condiciones</li>
                        <li>Derecho de ARCO</li>
                        <li>Nuestro Locales</li>
                    </ul>
                </div>

                <div className="container-der">
                    <div>
                        Libro de Reclamaciones
                        <br></br>
                        <img id="logo_a" src= "/" alt="Logo"/> 
                    </div>
                    
                    <div>
                        Métodos de Pago
                        <br></br>
                            <img id="" src="/" alt="foto 1"></img>
                            <img id="" src="/" alt="foto 2"></img>
                            <img id="" src="/" alt="foto 3"></img>
                    </div>
                </div>

            </div>

                <div className="container-copy">
                    <div className="copy">
                       <span> &#169; 2024 Grupo 5. Todos los derechos reservados</span> 
                    </div>
                    
                </div>

            </footer>
        </>
    );
}