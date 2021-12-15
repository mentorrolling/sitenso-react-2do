import React, { useState } from "react";
import { esculturasList } from "../data/galeria";

const Galeria = () => {
  console.log(esculturasList);
  const [indice, setIndice] = useState(0);
  const [verMas, setVerMas] = useState(false);

  const siguienteEscultura = () => {
    if (indice + 1 < esculturasList.length) {
      setIndice(indice + 1);
    }
  };

  const anteriorEscultura = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  const mostrarMas = () => {
    setVerMas(!verMas);
  };

  let escultura = esculturasList[indice];

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <h1>Galería Interactiva</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6 offset-md-3">
          <button
            className="btn btn-primary me-2"
            onClick={anteriorEscultura}
            disabled={indice === 0}
          >
            Anterior
          </button>
          <button
            className="btn btn-primary"
            onClick={siguienteEscultura}
            disabled={indice + 1 === esculturasList.length}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6 offset-md-3">
          <h3>{escultura.name}</h3>
          <span>de {escultura.artist}</span>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6 offset-md-3">
          <img src={escultura.url} alt={escultura.alt} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <button className="btn btn-success" onClick={mostrarMas}>
            {verMas ? "Ocultar" : "Ver más"}
          </button>

          {verMas && <h4>{escultura.description}</h4>}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
