import React, { useState } from "react";

const App = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);
  //   console.log(props.datos);
  //   const { nombre, email } = datos;

  //código javascript

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Contador: {counter}</h3>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>Hola Sitenso!!!!!</h1>
    //   <p>{nombre}</p>
    //   <p>{email}</p>
    // </div>
  );
};

export default App;
