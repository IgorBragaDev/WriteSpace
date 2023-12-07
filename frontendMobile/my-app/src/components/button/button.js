import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonForms = ({
  buttonText,
  buttonBoxAlign,
  buttonBackGroundColor,
  buttonBorderWidth,
  buttonHeight,
  buttonBorderColor,
  buttonAlignItens,
  buttonJustifyContent,
  buttonBorderRadius,
  buttonWidth,
  buttonTextTextalign,
  buttonTextFontSize,
  buttonTextFontWeigth,
  buttonTextColor,
  onPress,
  buttonBoxPaddingTop
}) => {
  const styles = StyleSheet.create({
    buttonBox: {
      alignItems: buttonBoxAlign,
      paddingTop : buttonBoxPaddingTop
    },
    button: {
      backgroundColor: buttonBackGroundColor,
      borderWidth: buttonBorderWidth,
      height: buttonHeight,
      borderColor: buttonBorderColor,
      alignItems: buttonAlignItens,
      justifyContent: buttonJustifyContent,
      borderRadius: buttonBorderRadius,
      width: buttonWidth,
    },
    buttonText: {
      textAlign: buttonTextTextalign,
      fontSize: buttonTextFontSize,
      fontWeight: buttonTextFontWeigth,
      color: buttonTextColor,
    },
  });

  return (
    <View style={styles.buttonBox}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonForms;
