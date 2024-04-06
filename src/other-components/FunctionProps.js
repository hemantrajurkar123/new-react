import React from "react";
import "../Styles/CustomStyle.css";
const FunctionProps = ({actors,handleDelete}) => {
  // The data is coming from Actors.js. We are displaying it here
  console.log("Actor Props", actors);
  return (
    <>
      <h6>Actors List</h6>
     <div>
        {actors.map((actor) => (
          <div key={actor.code} className="actors">
            <p>{actor.code}</p>
            <p>{actor.name}</p>
            <button onClick={()=>handleDelete(actor.code)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FunctionProps;
