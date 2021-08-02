import React, { useState } from "react";
import "./Home.css"

function Home() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h3 className="head">Function Component</h3>
      <button onClick={() => addCounter()}>Add</button>
      <div>{counter}</div>
    </div>
  );
}

export default Home;
