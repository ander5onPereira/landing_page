import { Container } from "./styles";
import Header from "../../organisms/Header";
interface FrontendProps {
  children: React.ReactNode;
}
const Frontend = ({ children }: FrontendProps) => {
  return (
    <Container>
      <Header></Header>
      <main>{children}</main>
    </Container>
  );
};
export default Frontend;
