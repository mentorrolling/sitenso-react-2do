import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadosRow = ({ empleado }) => {
  const { fullName, department, title, pic } = empleado;
  return (
    <div className="card mb-3">
      <div className="row g-0 d-flex">
        <div className="col-md-4 p-3">
          <EmpleadoAvatar avatar={pic} nombre={fullName} />
        </div>
        <div className="col-md-8">
          <div className="card-body h-100 d-flex flex-column justify-content-center">
            <h5 className="card-title">{fullName}</h5>
            <div className="d-flex align-items-center">
              <span className="card-text me-3">{title}</span>
              <span className="badge bg-info text-ligth">{department}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadosRow;
