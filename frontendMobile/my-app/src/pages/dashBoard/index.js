import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";
import { SessionsContext } from "../../context/sessions.context";
import frame from "../../images/png/Frame.png";
import logo from "../../images/png/logo.png";
import elipse from "../../images/svg/ellipse.svg";
import plusIcon from "../../images/svg/plusSignal.svg"
import userIcon from "../../images/svg/Bitmap.png";
import logout from "../../images/svg/logout.svg";
import { CategoriesContext } from "../../context/categories.context";
import HTMLView from "react-native-htmlview";
import { useNavigation } from "@react-navigation/native";

const DashBoard = () => {
  const { sessionsLogout } = useContext(SessionsContext);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { categories, getUserCategories, getCategoriesCards, cards } =
    useContext(CategoriesContext);

    const navigation = useNavigation();

  const toggleMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <TouchableOpacity onPress={() => getCategoriesCards(item.id)}>
        <Text style={styles.categoryItemText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderCards = ({ item }) => (
    <View style={styles.cardContent}>
      <View style={styles.cardTitle}>
        <Text>{item.name}</Text>
        <TouchableOpacity style={styles.editCardButton}>
          <Text>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <HTMLView value={item.text} />
      </View>
    </View>
  );
  return (
    <View style={styles.dashboardPageContainer}>
      <View style={styles.containerDashboard}>
        <View style={styles.headerDivDashBoard}>
          <TouchableOpacity
            onPress={() => toggleMenu()}
            style={styles.dropdownButton}
          >
            <Image source={frame} />
          </TouchableOpacity>
          <Image source={logo} />
          <Image source={userIcon} />
        </View>
      </View>
      
      <TouchableOpacity style={styles.ellipseButtonContainer} onPress={()=> navigation.navigate("createCard")}>
        <Image source={elipse} style={styles.ellipseButon} />
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>

      <View style={styles.centeredContainer}>
        <View style={styles.categoriesContainer}>
          <Text style={styles.cateriesTitle}>Categorias</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCategoryItem}
          />
          <TouchableOpacity style={styles.buttonAddCategory}>
            <Text >+ Adiconar categoria</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList data={cards} renderItem={renderCards} />
      </View>

      <Modal
        animationType="slide" // Ajuste para "slide" para ter o efeito desejado
        transparent={true}
        visible={openSideMenu}
        onRequestClose={() => toggleMenu()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.menuContent}>
            <Image source={logo} />
            <Text>Conteúdo do Menu</Text>
            <TouchableOpacity onPress={() => toggleMenu()}>
              <Text>Fechar Menu</Text>
            </TouchableOpacity>
            <FlatList></FlatList>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardPageContainer: {
    flex: 1,
  },
  containerDashboard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    borderRadius: 15,
    height: 145,
  },
  headerDivDashBoard: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  dropdownButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  modalContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  menuContent: {
    width: "80%",
    paddingTop: 70,
    paddingLeft: 30,
    height: "100%",
    marginTop: 200,
    backgroundColor: "#fff",
  },
  categoriesContainer: {
    width: "90%",
    paddingTop: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D7D7D7",
  },
  cateriesTitle: {
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    paddingBottom: 8, // Espaçamento inferior para separar do conteúdo abaixo
    paddingHorizontal: 10,
    textAlign: "left",
    fontWeight: "bold", // Adicione negrito se desejar
  },
  centeredContainer: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 17,
  },
  categoryItemText: {
    color: "#476EE6",
  },
  buttonAddCategory: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cardsContainer: {
    flex: 1,
  },
  cardContent: {
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  card: {
    padding: 10,
    overflow: "hidden",
  },
  cardTitle: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editCardButton: {
    backgroundColor: "#476EE6",
    padding: 10,
    borderRadius: 20,
    width: "20%",
    alignItems: "center",
  },
  ellipseButon: {
    backgroundColor: "#476EE6",
    borderRadius: 50,
  },
  ellipseButtonContainer: {
    position: 'absolute',
    bottom: 40, 
    right: 25, 
    alignItems: "center",
    justifyContent: "center",
    zIndex:1000
  },
  plusText: {
    position: "absolute",
    color: "white", 
    fontSize: 30, 
  },
});

export default DashBoard;
