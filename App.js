import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from './components/LoginScreen'
//import ContactsScreen from "./components/ContactsScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/*<ContactsScreen />*/}
      <LoginScreen /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70
  },
});


   




