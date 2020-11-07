import React,{ useState } from 'react'
import { StyleSheet, ScrollView,Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function SignupScreen({navigation}) {
    const[state,setState] = useState({
        userName: '',
        email: '',
        password: '',
        passwordAgain: ''
    })
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Sign Up</Text>
            </View>
            <View>
                <TextInput 
                placeholder="UserName" 
                style={styles.Input} 
                placeholderTextColor="#aaaaaa"
                value={state.userName}
                onChangeText={(userName) => {
                    setState({userName})
                }}/>
                 <TextInput 
                placeholder="Email" 
                style={styles.Input} 
                placeholderTextColor="#aaaaaa"
                value={state.email}
                onChangeText={(email) => {
                    setState({email})
                }}/>
                <TextInput
                autoCorrect={false} 
                placeholder="Password"
                placeholderTextColor="#aaaaaa"
                secureTextEntry={true} 
                style={styles.Input}
                value={state.password}
                onChangeText={(password) => {
                    setState({password})
                }}/>
                <TextInput
                autoCorrect={false} 
                placeholder="Password Again"
                placeholderTextColor="#aaaaaa"
                secureTextEntry={true} 
                style={styles.Input}
                value={state.passwordAgain}
                onChangeText={(passwordAgain) => {
                    setState({passwordAgain})
                }}/>
                <Text style={styles.forgotPassword}>Forget Password</Text>
            </View>
            <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>You already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                     <Text style={styles.signUp}>Log in</Text>
                </TouchableOpacity>
               
            </View>
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginTop: 50
        
      
    },
    loginText: {
        fontSize: 50,
        color: "#400752",

    },
    loginTextContainer:{
        marginBottom:30
    },
    Input:{
        borderBottomWidth:2,
        borderBottomColor: "#400752",
        fontSize: 20,
        height: 50,
        marginTop: 20
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 3,
        color: "#04085c"
    },
    buttonContainer:{
        height: 50,
        backgroundColor:"#400752",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        marginVertical: 50

    },
    buttonText:{
        color: 'white',
        fontSize: 25,
        

    },
    noAccountContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        
    },
    noAccountText: {

        fontSize: 16
    },
    signUp : {
        fontSize: 16,
        color: '#400752'
    }

  });
  