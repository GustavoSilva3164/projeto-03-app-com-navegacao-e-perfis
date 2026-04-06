import { View, Text } from "react-native"
import styles from "../styles/styles"

export default function Configuracoes() {

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.destaque}>Configurações</Text>
        <Text style={styles.texto}>
          Área para futuras configurações do app
        </Text>
      </View>

    </View>
  )
}