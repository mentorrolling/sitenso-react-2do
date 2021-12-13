import React from "react";

const EmpleadoAvatar = ({ avatar, nombre }) => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <img className="img-avatar" src={avatar} alt={nombre} />
    </div>
  );
};

export default EmpleadoAvatar;
