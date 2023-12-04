import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../pages/registerPage/index"; // Substitua pelo caminho real do componente de registro
import LoginScreen from "../pages/loginPage/index"; // Substitua pelo caminho real do componente de login
import { SessionsProvider } from "../context/sessions.context";
import DashBoard from "../pages/dashBoard";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <SessionsProvider>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="teste" component={RegisterScreen} />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login" }}
          />
          <Stack.Screen name="dashboard" component={DashBoard} />
        </Stack.Navigator>
      </SessionsProvider>
    </NavigationContainer>
  );
};

export default AppStack;
