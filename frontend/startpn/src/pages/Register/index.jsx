import Input from "../../components/inputs";
import Logo from "../../components/logo";

const RegisterPage = () => {
  return (
    <>
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
        <h3>Termos de uso e privacidade</h3>

        <div>
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox">
            Ao clicar nesse botão, eu concordo com os temos de uso e privacidade
            da nossa empresa
          </label>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default RegisterPage;
