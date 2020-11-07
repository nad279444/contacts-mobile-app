import React from 'react'
import { StyleSheet, ScrollView,Text, View,FlatList } from 'react-native';
import Contact from "../components/Contact";

export default function ContactsScreen() {
    const contacts = [
        {name:'Saitama', number:"0456-47586-18454"},
        {name:'Wu Kong', number:"074-47586-28454"},
        {name:'Killua', number:"072-47596-38454"},
        {name:'Ichigo', number:"064-44448-383214"},
        {name:'Naruto', number:"022-447686-50989"},
        {name:'Goku', number:"000-45686-45646"},
        
    ]

    return (
        <View>
            <FlatList 
            data ={contacts}
            renderItem={({item})=> {
            return <Contact name={item.name} phone={item.number}/>
            }}
            keyExtractor={(item) => item.number}
            />
            
        </View>
    )
}
