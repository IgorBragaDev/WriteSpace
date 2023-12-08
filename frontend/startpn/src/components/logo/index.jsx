import logo from "../../images/png/Logo.png";

const Logo = ({ width, heigth }) => {
  const styledLogo = {
    width: width,
    heigth: heigth,
  };
  return (
    <>
      <img src={logo} alt="logo da pagina " style={styledLogo} />
    </>
  );
};

export default Logo;
