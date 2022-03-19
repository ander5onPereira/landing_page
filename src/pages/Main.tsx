import { useState } from "react";
import ProductInformation from "../organisms/ProductInformation";
import ProductStats from "../organisms/ProductStats";
import Frontend from "../templates/Frontend";
import { Container } from "./styles";
function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Frontend>
        <Container>
          <ProductInformation />
          <ProductStats />
        </Container>
      </Frontend>
    </div>
  );
}

export default Main;
