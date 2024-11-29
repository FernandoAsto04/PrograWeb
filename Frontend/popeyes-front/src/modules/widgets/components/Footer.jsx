import React from "react";
import './footer.css'

export const Footer = () => {
    return (
        <>
            <hr></hr>
            <footer className="x">
                <div className="footer">
                    <div className="texto">
                        <div className="container-izq">
                            <img id="logo_a" src="/logo.png" alt="Logo"/>
                            <div>
                                Conéctate con nosotros
                                <div className="rs">
                                    <img id="insta" src="/instafoto.webp" alt="ig"></img>
                                    <img id="face" src="/facebook.png" alt="fb"></img>
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
                            <div className="reclamaciones">
                                <ul>
                                    <li id="titulo">Libro de Reclamaciones</li>
                                    <li>
                                        <a href="https://www.popeyes.com.pe/popeyes-reclamaciones/">
                                        <img id="libro" src="/fotos_footer/LibroDeReclamaciones.png" alt="Libro"/>
                                        </a>
                                    </li>
                                </ul>       
                            </div>

                            <div className="metodos">
                                <ul className="met">
                                    <li id="titulo">Métodos de Pago</li>
                                    <li id="tarjetas"><img id="visa" src="/fotos_footer/Visa.avif" alt="Visa"></img>
                                <img id="master" src="/fotos_footer/mastercard.png" alt="Mastercard"></img>
                                <img id="amex" src="/fotos_footer/amex.png" alt="Amex"></img></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                    <div className="copy">
                        <span> &#169; 2024 Grupo 5. Todos los derechos reservados</span>
                    </div>

            </footer>
        </>
    );
}
