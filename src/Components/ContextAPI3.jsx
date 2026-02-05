import React, { useContext } from "react";
import { AppState, SurnameState } from "../App";

function ContextAPI3() {
  const context = useContext(AppState);
  const surnameContext = useContext(SurnameState);
  return (
    <div className="context-api3">
      ContextAPI3
      <h3>{context.data}</h3>
      <h3>
        {context.firstName}
        <span> {surnameContext.surname}</span>
      </h3>
    </div>
  );
}

export default ContextAPI3;
