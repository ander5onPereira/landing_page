import { useState } from "react";
import Button from "../../atoms/Button";
import Logo from "../../molecules/Logo";
import Menu from "../Menu";
import { Box } from "./styles";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(!true);
  return (
    <Box>
      <Logo onClick={() => setOpenMenu(!openMenu)}/>
      <Menu active={openMenu} />
      <Button active={openMenu} />
    </Box>
  );
};

export default Header;
