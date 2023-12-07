import { AppRegistry } from "react-native";
import AppStack from "./src/routes/AppStack";
import { useEffect } from "react";
import * as Font from "expo-font";
export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        // Adicione outras variações da fonte, se houver (por exemplo, bold, italic, etc.)
      });
    }

    loadFonts();
  }, []);
  return <AppStack />;
}

AppRegistry.registerComponent("App", () => AppStack);
