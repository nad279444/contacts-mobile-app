
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen'

export default function App() {
  
  return (
    <View style={styles.container}>
      <LoginScreen />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
