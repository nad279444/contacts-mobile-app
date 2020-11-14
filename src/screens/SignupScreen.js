import React,{ useState } from 'react'
import { StyleSheet, ScrollView,Text, View,TextInput,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {createEmailAccount,registerError} from '../redux/actions/authActions'
 function SignupScreen({navigation,auth,registerError,createEmailAccount}) {
    const[state,setState] = useState({
        email: '',
        password: '',
        confirm: ''
    })

    const handleUpdateState = (name,value) => {
        console.log(name,value)
        setState({
            ...state, [name]:value
        })
    }

    const handleOnSubmit = () => {
        if(state.password !== state.confirm){
           registerError('passwords do not match') 
           return; 
         }
         console.log(state)
          createEmailAccount(state.email,state.password)
    }
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Sign Up</Text>
            </View>
            <View>
                {auth.error.register && <Text style={{color: 'red'}}>{auth.error.register}</Text> }
                 <TextInput 
                placeholder="Email" 
                style={styles.Input} 
                placeholderTextColor="#aaaaaa"
                value={state.email}
                onChangeText={(text) => {
                    handleUpdateState('email',text)}}
                />
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
                <TextInput
                autoCorrect={false} 
                placeholder="Password Again"
                placeholderTextColor="#aaaaaa"
                secureTextEntry={true} 
                style={styles.Input}
                value={state.confirm}
                onChangeText={(text) => {
                    handleUpdateState('confirm',text)
                }}/>
                <Text style={styles.forgotPassword}>Forget Password</Text>
            </View>
            <View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleOnSubmit}>
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

  const mapStateToProps= (state) => {
     return {auth:state}
  }
  
  export default connect(mapStateToProps,{createEmailAccount,registerError})(SignupScreen)