// useState
import { useState } from "react";
function Update() {
  const [num, setNum] = useState(1);

  //   function inc() {
  //     setNum(num + 1);
  //   }

  function inc(n) {
    setNum(num + n);
  }
  function dec(n) {
    setNum(num - n);
  }
  return (
    <div>
      <h2>{num}</h2>
      <div style={{ display: "flex" }}>
        {/* <button onClick={inc}>Increment</button> */}
        <button onClick={() => inc(2)}>Increment</button>
        <button onClick={() => dec(2)}>Decrement</button>
      </div>
    </div>
  );
}

export default Update;
