import React from "react";
import Carrusel from "../components/Carrusel";
import Extras from "../components/Extras";
import Promociones from "../components/Promociones";
import "../components/EstilosLandingPage.css"

export default function Principal (){
    return(
        <div>
            <Carrusel/>
            <Promociones/>
            <Extras/>            
        </div>
    )
}
