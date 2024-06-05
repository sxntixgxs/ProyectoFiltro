import React, { useState } from "react";

import {Galeria} from "./galeria-component"
import {Imc} from "./imc-component"
 
export const Home = () => {
    const [control, setControl] = useState(null);
  switch (control) {
    case 1:
      return <Imc />;
    case 2:
      return <Tabla/>;
    case 3:
      return <Galeria/>;
    case 4:
      return <AppiShow />;
    default:
      break;
  }



  return (
   <>
   <h2>¿Qué Deseas Hacer Hoy?</h2>
        <div className="option-home">
          <div
            className="op-imc"
            tabIndex="0"
            onClick={() => setControl(1)}
          >
            <p>Indice de masa corporal</p>
          </div>
          <div
            className="op-imc"
            tabIndex="0"
            onClick={() => setControl(2)}
          >
            
            <p>Tabla</p>
          </div>
          
          <div
            className="op-imc"
            tabIndex="0"
            onClick={() => setControl(3)}
          >
            <p>Galeria</p>
          </div>
          <div
            className="op-imc"
            tabIndex="0"
            onClick={() => setControl(4)}
          >
            
            <p>Appi</p>
          </div>
        </div>
   </>
  );
};
