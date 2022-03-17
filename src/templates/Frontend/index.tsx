import { Container } from "./styles";
interface FrontendProps {
  children: React.ReactNode;
}
const Frontend = ({ children }: FrontendProps) => {
  return <Container>Test Frontend {children}</Container>;
};
export default Frontend;
