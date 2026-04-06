import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "../styles/styles"

export default function Perfil({ route, navigation }) {

  const usuario = route.params?.usuario || "Usuário"

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={require("../images/guardianimage.png")}
          style={styles.imagem}
        />

        <Text style={styles.texto}>Nome: {usuario}</Text>
        <Text style={styles.texto}>Email: admin@email.com</Text>
        <Text style={styles.texto}>Nascimento: 01/01/2000</Text>

      </View>

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.textoBotao}>Sair</Text>
      </TouchableOpacity>

    </View>
  )
}