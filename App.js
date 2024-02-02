import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './src/Components/Login';
import React, { useState }  from 'react'

export default function App() {
  const [user, setUser] = useState(null)

    if(!user){
      return <Login changeStatus={ (user) => setUser(user)}/>
    }

    return(
        <SafeAreaView>
            <Text>DENTRO DA TELA TAREFAS</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#F2f6fc'
  }
})


