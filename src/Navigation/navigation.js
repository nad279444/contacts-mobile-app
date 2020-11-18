import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import ContactsScreen from "../screens/ContactsScreen";
import SignupScreen from "../screens/SignupScreen";
import {connect} from 'react-redux'
import { auth } from "firebase";
import { TouchableOpacity,Text } from "react-native";
import {logOut} from "../redux/actions/authActions"

const Stack = createStackNavigator()


function AppContainer({auth,logOut}) {
  return (
    <NavigationContainer >
        {auth.login? 
          <Stack.Navigator>
             <Stack.Screen 
             name="Contacts" 
             options={{
               headerRight: () => (
                 <TouchableOpacity>
                   <Text style={{marginRight: 20,fontSize: 20}}
                   onPress={logOut}>Log out</Text>
                 </TouchableOpacity>
               )

               
             }}
            component={ContactsScreen}/>
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

export default connect(mapStateToProps,{logOut})(AppContainer)

   


          