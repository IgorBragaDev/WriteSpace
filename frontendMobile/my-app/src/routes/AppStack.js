import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../pages/registerPage/index"; // Substitua pelo caminho real do componente de registro
// import LoginScreen from "./path-to/LoginScreen"; // Substitua pelo caminho real do componente de login

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="teste" component={RegisterScreen} />
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
