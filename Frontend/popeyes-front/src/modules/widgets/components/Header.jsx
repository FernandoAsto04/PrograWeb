import React from "react";
import { Link, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';


const Pedidos = () => {
    return(
        <>

        </>
    );
  }


export const Header = () => {
    
    return(
        <Router> 
            <nav className="nav">
                <div className="container-img">
                    <Link to='/'>
                        <img id="logo" src= "/logo.png" alt="Logo" /> 
                    </Link>
                </div>

                <div className="container-boton">
                    <button> <Link to='/pedido-delivery'> ¿Cómo deseas recibir tu pedido? </Link></button>
                </div>
                
                <div className="container-texto">
                    <ul>
                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li>
                                <Link to="/pedidos">Mis pedidos</Link>
                            </li>
                            <li>
                                <Link to="/locales">Locales</Link>
                            </li>
                    </ul>
                </div>

                <div className="container-extra">

                    <div className="extra">
                        <Link to='/contacto'>
                            Llámanos
                            <br></br>
                            <strong className="orange-text">631-6000</strong>
                        </Link>
                    </div>
                    
                    <div className="extra-s">
                        <Link to='/login'>
                            Hola,
                            <br></br>
                            <strong className="orange-text">Iniciar Sesión</strong>
                        </Link>
                    </div>

                    <div className="extra-c">
                        <Link to='/shopping-cart'>
                            <strong className="orange-text">S/.0.00</strong>
                        </Link>
                    </div>
                </div>

                <Routes>
                    <Route path="/"></Route>
                    <Route path="/pedido-delivery" element={<Pedidos></Pedidos>}></Route>
                </Routes>
            </nav>
        </Router>
    )
}