import React from "react";
import { StyleSheet, } from "react-native";
import {Provider} from 'react-redux'
import store from "./src/redux/reducers/store"
import AppContainer from './src/Navigation/navigation'


export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70
  },
});


   




