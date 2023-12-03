import Button from "../../components/button";
import Checkbox from "../../components/checkBox";
import Input from "../../components/inputs";
import Logo from "../../components/logo";
import SteveJobs from "../../images/png/stevejobs.png";
import Ondas from "../../images/png/ondas.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "./register.css";
import { registerSchema } from "../../schemas/session.register.shema";
import { useContext } from "react";
import { SessionsContext } from "../../context/sessionsContext";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const { sessionsRegister } = useContext(SessionsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });
  return (
    <>
      <div className="resposiveContainer">
        <div className="pageContainer">
          <div className="logoTittleContainer">
            <Logo width={"190px"} heigth={"47.739px"} />
            <h1 className="text_circular_color_blue">Cadastro</h1>
          </div>
          <form
            className="formRegister"
            onSubmit={handleSubmit(sessionsRegister)}
          >
            <div className="inputsContainer">
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
                marginBottomDivInputsLabel={"10px"}
                labeltypography="text_circular_label"
                placeholdertypography="text_circular_placeholder"
                handle={register("name")}
              />
              {errors.name && (
                <p className="text_circular_small_red">{errors.name.message}</p>
              )}
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
                marginBottomDivInputsLabel={"10px"}
                labeltypography="text_circular_label"
                placeholdertypography="text_circular_placeholder"
                handle={register("email")}
              />
              {errors.email && (
                <p className="text_circular_small_red">
                  {errors.email.message}
                </p>
              )}
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
                marginBottomDivInputsLabel={"10px"}
                labeltypography="text_circular_label"
                placeholdertypography="text_circular_placeholder"
                handle={register("password")}
              />
              {errors.password && (
                <p className="text_circular_small_red">
                  {errors.password.message}
                </p>
              )}
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
                handle={register("checkpassword")}
              />
              {errors.checkpassword && <p>{errors.checkpassword.message}</p>}
            </div>

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
            <p className="linkToLogin">
              Ja tem uma conta ? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>

        <div className="steveContainer">
          <img className="steveImage" src={SteveJobs} alt="" />
          <img className="wavesImage" src={Ondas}></img>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
