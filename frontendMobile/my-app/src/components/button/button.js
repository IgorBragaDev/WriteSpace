import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonForms = ({}) => {
  const styles = StyleSheet.create({
    buttonBox: {
      
      alignItems: "center",
    },
    button: {
      backgroundColor: "476EE6",
      borderWidth: 1,
      height: 50,
      borderColor: "#D7D7D7",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
      width: "50%"
    
    },
    buttonText: {
      textAlign: "center",
    },
  });

  return (
    <View style={styles.buttonBox}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonForms;
