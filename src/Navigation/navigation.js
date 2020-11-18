import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import ContactsScreen from "../screens/ContactsScreen";
import SignupScreen from "../screens/SignupScreen";
import {connect} from 'react-redux'
import { auth } from "firebase";

const Stack = createStackNavigator()


function AppContainer({auth}) {
  return (
    <NavigationContainer >
        {auth.login? 
          <Stack.Navigator>
             <Stack.Screen name="ContactList" component={ContactsScreen}/>
          </Stack.Navigator>
        :
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
         </Stack.Navigator>
       

    }
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return { auth: state}
}

export default connect(mapStateToProps)(AppContainer)

   


          