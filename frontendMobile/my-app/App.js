import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Input from "./src/components/Input/input";
import logo from "./src/images/png/logo.png";
import ButtonForms from "./src/components/button/button";
import { ScaledSheet, s, setGlobalMetrics } from "react-native-size-matters";
import { useState } from "react";
import InputPassword from "./src/components/inputPassword/inputPassword";

export default function App() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleTermsToggle = () => {
    setTermsAccepted(!termsAccepted);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} />
        <Text style={styles.textCircularBlue}>Cadastro</Text>
      </View>
      <View style={styles.inputArea}>
        <Input
          placeholder={"Insira seu nome"}
          label={"Name"}
          borderWidth={1}
          borderColor={"#D7D7D7"}
          height={45}
          borderRadius={10}
        />
        <Input
          placeholder={"Insira seu e-mail"}
          label={"E-mail"}
          borderWidth={1}
          borderColor={"#D7D7D7"}
          height={45}
          borderRadius={10}
        />
        <InputPassword
          placeholder={"Insira sua senha"}
          label={"Insira sua senha "}
          borderWidth={1}
          borderColor={"#D7D7D7"}
          height={45}
          borderRadius={10}
        />

        <InputPassword
          placeholder={"Confirme sua senha"}
          label={"Confirme sua senha "}
          borderWidth={1}
          borderColor={"#D7D7D7"}
          height={45}
          borderRadius={10}
        />
      </View>
      <Text style={styles.termsTitle}>Temos de uso e privacidade</Text>
      <View>
        <View style={styles.termsContainer}>
          <TouchableOpacity
            onPress={handleTermsToggle}
            style={styles.termsButton}
          >
            <Text>{termsAccepted ? "✔️" : "❌"}</Text>
          </TouchableOpacity>
          <Text style={styles.termsText}>
            Ao clicar neste botão, eu concordo com os termos de uso e
            privacidade da nossa empresa.
          </Text>
        </View>
      </View>
      <Text>Ja tenho uma conta </Text>
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

      />
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
});
