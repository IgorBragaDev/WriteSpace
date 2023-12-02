import Logo from "../../components/logo";
import Input from "../../components/inputs";
import Button from "../../components/button";
import SteveJobs from "../../images/png/stevejobs.png";
import Ondas from "../../images/png/ondas.png";
import "./login.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { SessionsContext } from "../../context/sessionsContext";
import { loginSchema } from "../../schemas/session.login.schema";
const LoginPage = () => {
  // const {sessionsLogin} = useContext(SessionsContext)
  const sessionsLogin = (e) => {
    e.preventDefault();
    console.log("click");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  return (
    <>
      <div className="resposiveContainer">
        <div className="LoginpageContainer">
          <div className="logoTittleContainerLogin">
            <Logo width={"190px"} heigth={"47.739px"} />
            <h1 className="text_circular_color_blue">Dados de acesso</h1>
          </div>
          <form
            onSubmit={(e) => 
              sessionsLogin(e)
            }
          >
            <div>
              <Input
                htmlFor={"email"}
                id={"email"}
                type={"text"}
                name={"email"}
                placeholder={"Insira seu e-mail"}
                display={"grid"}
                grid={"auto auto"}
                gap={"10px"}
                inputHeight={"50px"}
                inputWidth={"100%"}
                inputMaxWidth={"418px"}
                inputMinWidth={"290px"}
                inputBorderRadius={"7px"}
                inputBorder={"1px solid #D7D7D7"}
                labeltypography="text_circular_label"
                placeholdertypography="text_circular_placeholder"
                handle={register}
              />
            </div>
            <Input
              htmlFor={"password"}
              id={"password"}
              type={"text"}
              name={"senha"}
              placeholder={"Insira sua senha"}
              display={"grid"}
              grid={"auto auto"}
              gap={"10px"}
              inputHeight={"50px"}
              inputWidth={"100%"}
              inputMaxWidth={"418px"}
              inputMinWidth={"290px"}
              inputBorderRadius={"7px"}
              inputBorder={"1px solid #D7D7D7"}
              labeltypography="text_circular_label"
              placeholdertypography="text_circular_placeholder"
              handle={register}
            />
            <Button
              buttonText={"Entrar"}
              width={"100%"}
              height={"48px"}
              maxWidth={"324px"}
              minWidth={"267px"}
              borderRadius={"60px"}
              border={"none"}
              backgroundColor={"#476EE6"}
              buttonTypography="text_circular_button_color_FFF"
              marginTop={"70px"}
            />
          </form>
        </div>
        <div className="steveContainerLogin">
          <img className="steveImageLogin" src={SteveJobs} />
          <img className="wavesImageLogin" src={Ondas}></img>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
