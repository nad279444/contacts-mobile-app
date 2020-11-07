import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from './screens/LoginScreen'
import ContactsScreen from "./screens/ContactsScreen";
import SignupScreen from "./screens/SignupScreen"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            header: () => null
          }}
          name="Sign Up" 
          component={SignupScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ContactList" component={ContactsScreen}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70
  },
});


   




