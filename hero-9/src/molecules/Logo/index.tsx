import LogoKreed from "../../assets/LogoKreed.svg";
const Logo = (props:any) => {
  return (
    <a {...props} >
      <img
        src={LogoKreed}
        alt="Logo da marca Kreed, o logo é a letra K em branco com um ponto dentro de um quadrado no tom de azul com bordas arredondadas e fora do quadrado escrito Kreed em tom de preto"
      />
    </a>
  );
};
export default Logo;
