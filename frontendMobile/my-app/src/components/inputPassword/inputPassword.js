import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
const InputPassword = ({
  label,
  type,
  placeholder,
  backgroundColor,
  borderWidth,
  borderColor,
  height,
  borderRadius,
  value,
  onChange
}) => {
  const [hidepass, setHidePass] = useState(true);
  const styles = StyleSheet.create({
    label: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 14,
      fontWeight: "400",
      letterSpacing: 0.202,
    },
    input: {
      backgroundColor: backgroundColor,
      height: height,
      width: "85%",
    },
    inputArea: {
      borderColor: borderColor,
      borderRadius: borderRadius,
      borderWidth: borderWidth,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 3,
    },
    icons: {
      width: "15%",
      height: 45,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={hidepass}
          value={value}
          onChangeText={onChange}
        />
        <TouchableOpacity
          style={styles.icons}
          onPress={() => setHidePass(!hidepass)}
        >
          {hidepass ? (
            <Ionicons name="eye-off" color={"black"} size={25} />
          ) : (
            <Ionicons name="eye" color={"black"} size={25} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputPassword;
