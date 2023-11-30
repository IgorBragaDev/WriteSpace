import Checkbox from "../../components/checkBox";
import Input from "../../components/inputs";
import Logo from "../../components/logo";
import "./register.css";
const RegisterPage = () => {
  return (
    <>
      <div className="pageContainer">
        <Logo width={"190px"} heigth={"47.739px"} />
        <h1 className="text_circular_color_blue">Cadastro</h1>
        <form>
          <Input
            htmlFor={"name"}
            id={"name"}
            type={"text"}
            name={"Name"}
            placeholder={"Insira seu nome"}
            display={"grid"}
            grid={"auto auto"}
            gap={"10px"}
          />
          <Input
            htmlFor={"email"}
            id={"email"}
            type={"text"}
            name={"E-mail"}
            placeholder={"Insira seu e-mail"}
            display={"grid"}
            grid={"auto auto"}
            gap={"10px"}
          />
          <Input
            htmlFor={"password"}
            id={"password"}
            type={"password"}
            name={"Senha"}
            placeholder={"Insira sua senha"}
            display={"grid"}
            grid={"auto auto"}
            gap={"10px"}
          />
          <Input
            htmlFor={"confirmpassword"}
            id={"confirmpassword"}
            type={"password"}
            name={"Confirmar sua senha"}
            placeholder={"Confirme sua senha"}
            display={"grid"}
            grid={"auto auto"}
            gap={"10px"}
          />

          <div>
            <h3>Termos de uso e privacidade</h3>
            <Checkbox />
            <span>Termos de uso e privacidade</span>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
