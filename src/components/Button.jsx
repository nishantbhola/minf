import React from "react";

function ButtonLeft(prop) {

  return (
    <button className="button --left w-full h-full tracking-widest ">
      {prop.prop}
    </button>
  );
}

function ButtonRight(prop) {
  return (
    <div>
      <button className="button --right">{prop.prop}</button>
    </div>
  );
}

export { ButtonLeft, ButtonRight };
