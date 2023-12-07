import { useContext, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image ,Picker } from "react-native";
import { useForm, Controller } from "react-hook-form";
import vector from "../../images/svg/seta.svg";
import TextEditor from "../../components/textEditor";
import fonts from "../../global/styles/fonts";
import Input from "../../components/Input/input";

import { CategoriesContext } from "../../context/categories.context";

const CreateCard = () => {
  const { categories } = useContext(CategoriesContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <View style={styles.createCardPageContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.NavigateButton}>
          <TouchableOpacity style={styles.circleBlue}>
            <Text style={fonts.textCircularButtonColorFFF}>{`<`}</Text>
          </TouchableOpacity>
          <Text style={fonts.textCircularColorBlackBigCard}>Criar Card</Text>
        </View>
        <TouchableOpacity style={styles.buttonCreate}>
          <Text style={fonts.textCircularColorWhiteTitleCard}>Criar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={"Insira um nome"}
              label={"Nome"}
              borderWidth={1}
              borderColor={"#D7D7D7"}
              height={50}
              borderRadius={10}
              onChangeText={onChange}
              valueInput={value}
            />
          )}
        />
      </View>
      <View style={styles.categoriesSelectBox}>
        <Text style={styles.textCircularLabel}>Categoria</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <Picker
              selectedValue={field.value}
              onValueChange={(value) => field.onChange(value)}
              style={styles.categorySelect}
            >
              {categories.map((category) => (
                <Picker.Item
                  key={category.id}
                  label={category.title}
                  value={category.id}
                />
              ))}
            </Picker>
          )}
          name="id_category"
          defaultValue="" // Defina um valor padrão, se necessário
        />
      </View>
      <TextEditor />
    </View>
  );
};

const styles = StyleSheet.create({
  createCardPageContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  NavigateButton: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  buttonCreate: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 14,
    width: "17%",
    alignItems: "center",
    backgroundColor: "#476EE6",
    borderColor: "transparent",
  },
  vector: {
    padding: 10,
  },
  circleBlue: {
    padding: 5,
    width: "20%",
    borderWidth: 1,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#476EE6",
    borderColor: "transparent",
  },
});

export default CreateCard;
