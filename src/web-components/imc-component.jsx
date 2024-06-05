import React, { useState } from "react";

export const Imc = () => {
  const [IMC, setImc] = useState(0);
  const [imagen, setImagen] = useState("");
  const [result, setResult] = useState("SIn d");

  function calcularIMC(peso, altura) {
    let imcResult = peso / (altura * 2)
    setImc(imcResult);
    console.log(imcResult)
    console.log(imcResult > 18.5 && imcResult< 24.9)
    if (imcResult > 18.5 && imcResult< 24.9) {
      setImagen("../../public/persona.png");
      setResult("Normal");
      console.log("first");
    } else if (imcResult> 25 &&imcResult < 29.9) {
      setImagen("../../public/exceso-de-peso.png");
      setResult("Sobre peso");
    } else if (imcResult > 30 && imcResult < 34.9) {
      setImagen("../../public/grasa-corporal.png");
      setResult("Obecidad 1 ");
    } else if (imcResult > 35 && imcResult < 39.9) {
      setImagen("../../public/gordo.png");
      setResult("Obecidad 2 ");
    } else if (imcResult > 40) {
      setImagen("../../public/hombre.png");
      setResult("Obesidad 3");
    }
  }

  return (
    <div className="container-Principal">
      <div className="form-Imc">
        <div className="optionsFormC">
          <span className="spanImc">Ingrese su peso (kg):</span>
          <input
            className="peso"
            type="number"
            name="peso"
            id="peso"
            placeholder="0"
            required
          />
        </div>
        <div className="optionsFormC">
          <span className="spanImc">Ingrese su altura (cm):</span>
          <input
            className="altura"
            name="altura"
            type="number"
            id="altura"
            placeholder="0"
            required
          />
        </div>
        <button
          onClick={() => {
            calcularIMC(parseFloat(peso.value), parseFloat(altura.value));
          }}
        >
          Calcular IMC
        </button>
        <p>Su IMC es: {IMC}</p>
        <img src={imagen} alt="" />
        <h1>{result}</h1>
      </div>
    </div>
  );
};
