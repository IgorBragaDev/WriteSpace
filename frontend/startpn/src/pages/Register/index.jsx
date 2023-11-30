import Button from "../../components/button";
import Checkbox from "../../components/checkBox";
import Input from "../../components/inputs";
import Logo from "../../components/logo";
import "./register.css";
const RegisterPage = () => {
  return (
    <>
      <div className="pageContainer">
        <div className="logoTittleContainer">
        <Logo width={"190px"} heigth={"47.739px"} />
        <h1 className="text_circular_color_blue">Cadastro</h1>
        </div>
        <form className="formRegister">
          <Input
            htmlFor={"name"}
            id={"name"}
            type={"text"}
            name={"Name"}
            placeholder={"Insira seu nome"}
            display={"grid"}
            grid={"auto auto"}
            gap={"10px"}
            inputHeight={"50px"}
            inputWidth={"100%"}
            inputMaxWidth={"324px"}
            inputMinWidth={"290px"}
            inputBorderRadius={"7px"}
            inputBorder={"1px solid #D7D7D7"}
            labeltypography="text_circular_label"
            placeholdertypography="text_circular_placeholder"
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
            inputHeight={"50px"}
            inputWidth={"100%"}
            inputMaxWidth={"324px"}
            inputMinWidth={"290px"}
            inputBorderRadius={"7px"}
            inputBorder={"1px solid #D7D7D7"}
            labeltypography="text_circular_label"
            placeholdertypography="text_circular_placeholder"
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
            inputHeight={"50px"}
            inputWidth={"100%"}
            inputMaxWidth={"324px"}
            inputMinWidth={"290px"}
            inputBorderRadius={"7px"}
            inputBorder={"1px solid #D7D7D7"}
            labeltypography="text_circular_label"
            placeholdertypography="text_circular_placeholder"
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
            inputHeight={"50px"}
            inputWidth={"100%"}
            inputMaxWidth={"324px"}
            inputMinWidth={"290px"}
            inputBorderRadius={"7px"}
            inputBorder={"1px solid #D7D7D7"}
            labeltypography="text_circular_label"
            placeholdertypography="text_circular_placeholder"
          />

          <div className="checkBoxContainer">
            <h3 className="text_circular_small_bold_black">
              Termos de uso e privacidade
            </h3>
            <Checkbox
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              justifyContent={"space-between"}
              // inputWidth= {"50px"}
              inputBorder={"2px solid #476EE6 "}
            />
            <p className="text_circular_small_blue">
              Termos de uso e privacidade
            </p>
          </div>

          <Button
            type={"text"}
            buttonText={"Cadastrar"}
            width={"100%"}
            height={"48px"}
            maxWidth={"324px"}
            minWidth={"267px"}
            borderRadius={"60px"}
            border={"none"}
            backgroundColor={"#476EE6"}
            buttonTypography="text_circular_button_color_FFF"
          />
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
