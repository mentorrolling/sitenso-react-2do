import React from "react";
import { empleados } from "../data/empleados";
import EmpleadosRow from "./EmpleadosRow";

const EmpleadosList = () => {
  //   console.log(empleados);
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3">
          <h1>Lista de empleados</h1>
          {empleados.map((empleado) => (
            <EmpleadosRow key={empleado.id} empleado={empleado} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpleadosList;
