import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import ContactsScreen from "../screens/ContactsScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator()


export default function AppContainer() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            header: () => null
          }}
          name="Sign Up" 
          component={SignupScreen}/>
        <Stack.Screen options={{
            header: () => null
          }}
          name="Login" 
          component={LoginScreen}/>
        <Stack.Screen name="ContactList" component={ContactsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



   




