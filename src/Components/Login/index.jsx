import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "../../services/firebaseConnection";

export default function Login({ changeStatus }){
    const [type, SetType] = useState('login')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    function HandleLogin(){

        if(type === 'login'){
            //Fazermos o login
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                changeStatus(user.user.uid)
            })
        }else{
            //Aqui cadastramos o usuario
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                changeStatus(user.user.uid)
            })
            .catch((error) => {
                console.log(error)
                alert('Ops parece ocorreu algum erro!')
                return
            })
        }


    }

    return(
        <SafeAreaView style={styles.container}>
            <TextInput
            placeholder="Digite seu E-mail"
            style={styles.input}
            value={email}
            onChangeText={(text) => SetEmail(text)}            
            />

        <TextInput
            placeholder="Digite sua senha"
            style={styles.input}
            value={password}
            onChangeText={(text) => SetPassword(text)}            
            />

            <TouchableOpacity 
            style={[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'}]}
            onPress={HandleLogin}
            >
            <Text style={styles.loginText}>
                {type === 'login' ? 'Acessar' : 'Cadastrar'}
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => SetType(type => type === 'login' ? 'cadastrar' : 'login')}>
            <Text style={{textAlign: 'center'}}>
                { type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'} 
            </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1, 
        paddingTop: 40,
        backgroundColor: '#F2f6fc',
        paddingHorizontal: 10
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414'
    },
    handleLogin: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#141414',
        height: 45,
        marginBottom: 10
    },
    loginText: {
        color: '#FFF',
        fontSize: 17,
        textAlign: 'center'
    }
})

