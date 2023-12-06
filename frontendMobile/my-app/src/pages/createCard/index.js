import { useRef } from "react";
import { Text, View , StyleSheet } from "react-native";
import TextEditor from "../../components/textEditor";

const CreateCard = () => {
    const quillRef = useRef(null);
  return (
    <View style={styles.createCardPageContainer}>
      <View style={styles.headerContainer}>
        <Text>Teste</Text>
      </View>
        <TextEditor/>
    </View>
  );
};

const styles = StyleSheet.create({
    createCardPageContainer:{
        backgroundColor:"#fff",
        flex: 1,
        
    },
    headerContainer:{
        padding:20,
        marginTop: 70
    }
})

export default CreateCard;
