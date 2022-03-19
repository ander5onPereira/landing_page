import Button from "../../atoms/Button";
import Logo from "../../molecules/Logo";
import Menu from "../Menu";
import { Box } from "./styles";

const Header = () => {
  return (
    <Box>
      <Logo />
      <Menu />
      <Button />
    </Box>
  );
};

export default Header;
