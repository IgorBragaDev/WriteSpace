import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Input from "../../components/Input/input";
import logo from "../../images/png/logo.png";
import ButtonForms from "../../components/button/button";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import api from "../../services/api";
import InputPassword from "../../components/inputPassword/inputPassword";
import { SessionsContext } from "../../context/sessions.context";

export default function App() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleTermsToggle = () => {
    setTermsAccepted(!termsAccepted);
  };
  const { sessionsLogin } = useContext(SessionsContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit = async (data) => {
    console.log(data);
    await sessionsLogin(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} />
        <Text style={styles.textCircularBlue}>Dados de acesso</Text>
      </View>
      <View style={styles.inputArea}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={"Insira seu e-mail"}
              label={"E-mail"}
              borderWidth={1}
              borderColor={"#D7D7D7"}
              height={50}
              borderRadius={10}
              onChangeText={onChange}
              valueInput={value}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputPassword
              placeholder={"Insira sua senha"}
              label={"Insira sua senha "}
              borderWidth={1}
              borderColor={"#D7D7D7"}
              height={45}
              borderRadius={10}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </View>

      <ButtonForms
        buttonText={"Cadastrar"}
        buttonBoxAlign={"center"}
        buttonBackGroundColor={"#476EE6"}
        buttonBorderWidth={1}
        buttonHeight={50}
        buttonBorderColor={"#D7D7D7"}
        buttonAlignItens={"center"}
        buttonJustifyContent={"center"}
        buttonBorderRadius={40}
        buttonWidth={"80%"}
        buttonTextTextalign={"center"}
        buttonTextFontSize={18}
        buttonTextFontWeigth={"600"}
        buttonTextColor={"#FFF"}
        onPress={handleSubmit(submit)}
      />
      <Text>Ja tenho uma conta LOGAR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    display: "flex",
    justifyContent: "space-evenly",
  },
  logoContainer: {
    marginTop: 50,
    display: "flex",
    gap: "35",
  },
  textCircularBlue: {
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 1.5,
    color: "#476EE6",
  },
  termsTitle: {
    color: "rgba(0, 0, 0, 0.90)",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
  },
  termsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10",
  },
  termsText: {
    flex: 1,
    borderRadius: 10,
    color: "rgba(0, 0, 0, 0.90)",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
  },
  termsButton: {
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    alignContent: "center",
    alignItems: "center",
    borderColor: "#476EE6",
  },
  inputArea: {
    marginTop: 20,
  },
});
