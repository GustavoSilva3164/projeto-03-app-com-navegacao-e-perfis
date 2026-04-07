import React, { useState } from "react"
import { View, Text, ScrollView, Image, Pressable } from "react-native"
import styles from "../styles/styles"

function PersonagemCard({ item, navigation }) {
  const [hover, setHover] = useState(false)

  return (
    <Pressable
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      onPress={() => navigation.navigate("Personagem", item)}
      style={{ marginBottom: 15 }}
    >
      <Image source={item.menuImagem} style={styles.imagemGrid} />

      {hover && (
        <View style={styles.tooltip}>
          <Text style={[styles.nome, { color: item.cor }]}>
            {item.nome}
          </Text>

          <Text style={styles.tituloTooltip}>
            {item.titulo}
          </Text>
        </View>
      )}
    </Pressable>
  )
}

export default function Home({ route, navigation }) {

  const usuario = route.params?.usuario || "Usuário"

  const personagens = [
    {
      nome: "Knight",
      titulo: "Guardião de Kanterbury",
      cor: "#38bdf8",
      menuImagem: require("../images/menuknight.png"),
      imagem: require("../images/guardianimage1.png"),
      descricao: "O Knight é o protagonista de Guardian Tales e um novo recruta dos Guardiões de Kanterbury. Inicialmente apenas um soldado comum, ele rapidamente se torna peça central em uma guerra que ameaça todo o mundo. Ao lado da princesa, enfrenta invasores, explora diferentes mundos e forma alianças importantes, crescendo como herói e protetor."
    },
    {
      nome: "Princess",
      titulo: "Princesa de Kanterbury",
      cor: "#f472b6",
      menuImagem: require("../images/menuprincess.png"),
      imagem: require("../images/guardianimage2.png"),
      descricao: "A Pequena Princesa é uma figura central na história, representando esperança em meio ao caos. Apesar de sua aparência inocente, ela possui um papel fundamental no destino do mundo. Sua ligação com o Knight revela que seu futuro está profundamente conectado aos eventos que ameaçam a humanidade."
    },
    {
      nome: "Beth",
      titulo: "Guerreira dos Invasores",
      cor: "#ef4444",
      menuImagem: require("../images/menubeth.png"),
      imagem: require("../images/guardianimage4.png"),
      descricao: "Beth é uma das guerreiras mais poderosas entre os invasores. Seus confrontos com o Knight vão além da força física, representando o choque entre ideais e visões de mundo diferentes. Sua presença levanta questionamentos sobre quem realmente está certo na guerra."
    },
    {
      nome: "Camilla",
      titulo: "Rainha de Kanterbury e Líder Militar",
      cor: "#a855f7",
      menuImagem: require("../images/menucamilla.png"),
      imagem: require("../images/guardianimage5.png"),
      descricao: "Camilla é a rainha de Kanterbury e uma líder marcada por decisões difíceis. Diante de uma guerra inevitável, ela escolhe agir de acordo com sua própria visão de futuro, mesmo que isso a leve a caminhos controversos. Sua história representa o peso das escolhas feitas em nome da sobrevivência."
    },
    {
      nome: "Lilith",
      titulo: "Rainha dos Demônios",
      cor: "#9333ea",
      menuImagem: require("../images/menulilith.png"),
      imagem: require("../images/guardianimage6.png"),
      descricao: "Lilith é a rainha do reino demoníaco, uma líder estratégica e imprevisível. Diferente de uma vilã tradicional, suas ações são guiadas por objetivos próprios e pela sobrevivência de seu povo, trazendo profundidade e complexidade à narrativa."
    }
  ]

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0f172a" }}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
    >
      <View style={styles.container}>

        <Text style={styles.destaque}>Bem-vindo, {usuario}</Text>

        <Text style={styles.mensagem}>
          Explore os heróis de Guardian Tales
        </Text>

        {personagens.map((item, index) => (
          <PersonagemCard 
            key={index} 
            item={item} 
            navigation={navigation}
          />
        ))}

      </View>
    </ScrollView>
  )
}