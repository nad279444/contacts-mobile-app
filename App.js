import React from "react";
import { StyleSheet, } from "react-native";
import {Provider} from 'react-redux'
import {store,persistor}from "./src/redux/reducers/store"
import AppContainer from './src/Navigation/navigation'
import {PersistGate} from 'redux-persist/integration/react'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null}persistor={persistor}>
         <AppContainer />
      </PersistGate>
     
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70
  },
});


   




