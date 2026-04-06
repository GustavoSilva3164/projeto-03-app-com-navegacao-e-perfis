import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"
import styles from "../styles/styles"

export default function Login({ navigation }) {

  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  function entrar() {
    if (usuario === "admin" && senha === "1234") {
      navigation.replace("Tabs", { usuario })
    } else {
      alert("Usuário ou senha incorretos")
    }
  }

  return (
    <View style={styles.containerLogin}>

      <Text style={styles.titulo}>Guardian Tales App</Text>

      <TextInput
        placeholder="Usuário"
        placeholderTextColor="#94a3b8"
        style={styles.input}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#94a3b8"
        secureTextEntry
        style={styles.input}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

    </View>
  )
}