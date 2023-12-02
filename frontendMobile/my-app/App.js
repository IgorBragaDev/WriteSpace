import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Input from "./src/components/Input/input";
import logo from "./src/images/png/logo.png";
import ButtonForms from "./src/components/button/button";
import { ScaledSheet, setGlobalMetrics } from 'react-native-size-matters';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text>Cadastro</Text>
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
        <Input
          placeholder={"Insira sua senha"}
          label={"Senha"}
          borderWidth={1}
          borderColor={"#D7D7D7"}
          height={45}
          borderRadius={10}
        />
        <Input
          placeholder={"Confirme sua senha"}
          label={"Confirme sua senha "}
          borderWidth={1}
          borderColor={"#D7D7D7"}
          height={45}
          borderRadius={10}
        />
      </View>
      <Text>Temos de uso e privacidade</Text>

      <ButtonForms />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
});
