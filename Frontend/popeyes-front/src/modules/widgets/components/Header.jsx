import React from "react";


export const Header = () => {
    return(
        <nav className="nav">
            <div className="container-img">
                <a href="/">
                    <img id="logo" src= "/logo.png" alt="Logo" /> 
                </a>
            </div>
            
            <div className="container-texto">
                <ul>
                        <li>
                            <a href="/Menu">Menu</a>
                        </li>
                        <li>
                            <a href="/pedidos">Mis pedidos</a>
                        </li>
                        <li>
                            <a href="/locales">Locales</a>
                        </li>
                    
                </ul>
            </div>
            
        </nav>
    )
}