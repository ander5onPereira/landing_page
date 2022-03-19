import { useState } from "react";
import ButtonContact from "../atoms/ButtonContact";
import Frontend from "../templates/Frontend";
import { ColumnImage, Container } from "./styles";
import HeaderImage from "../assets/hederImage.svg";
import CardActivity from "../molecules/CardActivity";
function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Frontend>
        <Container>
          <div>
            <h1>Design driven development of your web product</h1>
            <h6>
              We are a full service digital agency that builds immesive user
              experience.
            </h6>
            <ButtonContact />
          </div>
          <ColumnImage>
            <CardActivity />
            <img
              src={HeaderImage}
              alt="Fotografia de uma mulher sentada a mesa olhando um cardapio na mão"
            />
          </ColumnImage>
        </Container>
      </Frontend>
    </div>
  );
}

export default Main;
