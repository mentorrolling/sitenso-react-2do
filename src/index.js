import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import App from "./App";
// import EmpleadosList from "./components/EmpleadosList";
// import App from "./App";
import Galeria from "./components/Galeria";

// const elemento = <h1>Hola React!</h1>;
const contenedor = document.querySelector("#root");

//que
//donde
// const persona = {
//   nombre: "Josecito",
//   email: "jocesito@hotmail.es",
// };

// ReactDOM.render(<EmpleadosList />, contenedor);
// ReactDOM.render(<App initialValue={0} />, contenedor);
ReactDOM.render(<Galeria />, contenedor);
