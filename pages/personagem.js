import { View, Text, Image, ScrollView } from "react-native"
import styles from "../styles/styles"

export default function Personagem({ route }) {

  const { nome, imagem, descricao, cor } = route.params

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0f172a" }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View style={styles.container}>

        <Image source={imagem} style={styles.imagemPersonagem} />

        <Text style={[styles.nomePersonagem, { color: cor }]}>
          {nome}
        </Text>

        <Text style={styles.textoLore}>
          {descricao}
        </Text>

        {nome === "Princess" && (
          <>
            <Text style={[styles.nomePersonagem, { color: "#facc15", marginTop: 30 }]}>
              Future Princess
            </Text>

            <Image
              source={require("../images/guardianimage3.png")}
              style={styles.imagemPersonagem}
            />

            <Text style={styles.textoLore}>
              Vinda de um futuro devastado pela guerra, a Future Princess carrega
              as marcas de inúmeras batalhas e perdas. Diferente de sua versão mais jovem,
              ela se tornou uma guerreira endurecida pelas consequências de um mundo que quase
              foi destruído. Ao longo de sua jornada, presenciou aliados caírem enquanto protegiam
              os poucos sobreviventes e a própria princesa, carregando consigo o peso desses sacrifícios.

              Sua existência é um lembrete vivo do que pode acontecer caso o presente falhe.
              Mesmo diante da dor e das perdas, ela continua lutando com determinação,
              buscando mudar o destino do mundo e impedir que aquele futuro se repita.
            </Text>
          </>
        )}

      </View>
    </ScrollView>
  )
}