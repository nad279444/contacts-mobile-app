import React,{ useState } from 'react'
import { StyleSheet, ScrollView,Text, View,TextInput,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {loginEmailAccount} from '../redux/actions/authActions'
 function LoginScreen({navigation,loginEmailAccount,auth}) {
    const[state,setState] = useState({
        email: '',
        password: ''
    })

    const handleUpdateState = (name,value) => {
        console.log(name,value)
        setState({
            ...state,[name]:value
        })
    }

    const handleOnSubmit = () => { 
        console.log(state)
        loginEmailAccount(state.email,state.password)
    }


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Log In</Text>
            </View>
            <View>
                {auth.error.login && <Text style={{color: 'red'}}>{auth.error.login}</Text> }
                <TextInput 
                placeholder="UserName" 
                style={styles.Input} 
                placeholderTextColor="#aaaaaa"
                value={state.email}
                onChangeText={(text) => {
                    handleUpdateState('email',text)
                }}/>
                <TextInput
                autoCorrect={false} 
                placeholder="Password"
                placeholderTextColor="#aaaaaa"
                secureTextEntry={true} 
                style={styles.Input}
                value={state.password}
                onChangeText={(text) => {
                    handleUpdateState('password',text)
                }}/>
                <Text style={styles.forgotPassword}>Forget Password</Text>
            </View>
            <View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleOnSubmit}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                         <Text style={styles.signUp}>Sign Up</Text>
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
        marginRight: 10,
        fontSize: 16
    },
    signUp : {
        fontSize: 16,
        color: '#400752'
    }

  });

  const mapStateToProps= (state) => {
    return {auth:state}
 }
   export default connect(mapStateToProps,{loginEmailAccount})(LoginScreen)