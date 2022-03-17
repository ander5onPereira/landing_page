import { useState } from "react";
import Frontend from "../templates/Frontend";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Frontend> Ola mundo</Frontend>
    </div>
  );
}

export default Main;
