import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginSignUpScreen from "./app/screens/LoginSignUpScreen";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import ChooseCausesScreen from "./app/screens/ChooseCausesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignUp">
        <Stack.Screen name="LoginSignUp" component={LoginSignUpScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ChooseCauses" component={ChooseCausesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
