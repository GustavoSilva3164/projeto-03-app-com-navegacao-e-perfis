import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "../styles/styles"

export default function Perfil({ route, navigation }) {

  const usuario = route.params?.usuario || "admin"

  return (
    <View style={styles.container}>

      <Image
        source={require("../images/guardianimage.png")}
        style={styles.imagemPerfil}
      />

      <Text style={styles.nomePerfil}>{usuario}</Text>

      <Text style={styles.texto}>Email: admin@email.com</Text>
      <Text style={styles.texto}>Data de nascimento: 01/01/2000</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.textoBotao}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}