import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
import { SessionsContext } from "../../context/sessions.context";
import frame from "../../images/png/Frame.png";
import logo from "../../images/png/logo.png";
import userIcon from "../../images/svg/Bitmap.png";

const DashBoard = () => {
  const { sessionsLogout } = useContext(SessionsContext);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const toggleMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

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

      {/* Modal */}
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
    flexDirection: "row", // Alterado para flexDirection: "row"
    justifyContent: "flex-start", // Alterado para justifyContent: "flex-end"
    alignItems: "flex-end", // Alterado para alignItems: "flex-end"
  },
  menuContent: {
    backgroundColor: "white",
    width: "80%", // Ajuste conforme necessário
    padding: 20,
    height: "100%",
    marginTop: 200,
    backgroundColor: "red",
  },
});

export default DashBoard;
