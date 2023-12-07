import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CategoriesContext } from "../../context/categories.context";
import Input from "../Input/input";

const AddCategoriesModal = () => {
  const { addCategoriesModal, setAddCategoriesModal, addCategories } =
    useContext(CategoriesContext);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await addCategories(data);
    setValue("title", "");
    setAddCategoriesModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={addCategoriesModal}
      onRequestClose={() => toggleMenu()}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <View style={styles.modalTitle}>
              <Text style={styles.text}>Adicionar Categoria</Text>
              <TouchableOpacity onPress={() => setAddCategoriesModal(false)}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Titulo</Text>
                <Controller
                  name="title"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      placeholder={"Digite o nome da categoria"}
                      borderWidth={1}
                      borderColor={"#D7D7D7"}
                      borderRadius={10}
                      onChangeText={onChange}
                      valueInput={value}
                    />
                  )}
                />
                {errors.title && (
                  <Text style={styles.errorMessage}>
                    {errors.title.message}
                  </Text>
                )}
              </View>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 18,
    color: "#476EE6",
  },
  formContainer: {},
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 5,
    padding: 10,
  },
  errorMessage: {
    color: "red",
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: "#476EE6",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddCategoriesModal;
