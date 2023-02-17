import { View, Button,TextInput } from 'react-native'
import React from 'react'

export default function LoginForm() {

  return (
    <View>
      <TextInput placeholder="Email"/>
      <TextInput placeholder="Contraseña"/>
      <Button title="Enviar" onPress={()=> console.log("ENVIAR")}/>
    </View>
  )
}