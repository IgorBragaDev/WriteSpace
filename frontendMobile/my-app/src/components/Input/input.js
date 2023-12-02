import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({
  label,
  type,
  placeholder,
  backgroundColor,
  borderWidth,
  borderColor,
  height,
  borderRadius
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      marginVertical: 10,
    },
    label: {
      // Adicione outros estilos de texto conforme necessário para o React Native
    },
    input: {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      height: height,
      borderRadius: borderRadius
    },
  });

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type === "email" ? "email-address" : "default"}
      />
    </View>
  );
};

export default Input;
