import HeaderImage from "../../assets/hederImage.svg";
import CardActivity from "../../molecules/CardActivity";
import CardChart from "../../molecules/CardChart";
import { Container } from "./styles";
const ProductStats = () => {
  return (
    <Container>
      <CardActivity />
      <CardChart />
      <img
        src={HeaderImage}
        alt="Fotografia de uma mulher sentada a mesa olhando um cardapio na mão"
      />
    </Container>
  );
};
export default ProductStats;
