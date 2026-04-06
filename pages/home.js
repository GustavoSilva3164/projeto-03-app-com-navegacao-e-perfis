import { View, Text, ScrollView, Image } from "react-native"
import styles from "../styles/styles"

export default function Home({ route }) {

  const usuario = route.params?.usuario || "Usuário"

const personagens = [
  {
    nome: "Knight",
    imagem: require("../images/guardianimage1.png"),
    descricao: "O Knight é o protagonista da história e um novo recruta dos Guardiões de Kanterbury. Mesmo começando como um soldado comum, ele rapidamente se vê no centro de um grande conflito quando o reino é atacado pelos Invasores. Durante o ataque, ele encontra a Pequena Princesa e passa a protegê-la a todo custo. Ao longo da jornada, o Knight enfrenta diversos desafios, explora mundos diferentes e reúne aliados poderosos. Sua coragem, determinação e senso de justiça fazem dele uma peça fundamental na luta para restaurar a paz e salvar o mundo."
  },
  {
    nome: "Princess",
    imagem: require("../images/guardianimage2.png"),
    descricao: "A Pequena Princesa de Kanterbury é uma personagem central na história de Guardian Tales. Apesar de sua aparência frágil e inocente, ela possui um papel extremamente importante no destino do mundo. Após o ataque dos Invasores, ela foge ao lado do Knight, criando uma forte ligação com ele ao longo da jornada. Sua presença representa esperança em meio ao caos, e aos poucos fica claro que ela possui uma conexão especial com os eventos que ameaçam o reino.",
    extra: {
      nome: "Future Princess",
      imagem: require("../images/guardianimage3.png"),
      descricao: "A Future Princess é uma versão da Pequena Princesa vinda de um futuro devastado pela guerra. Diferente de sua versão mais jovem, ela é uma guerreira experiente, forte e marcada pelas dificuldades que enfrentou. Ela luta com determinação para mudar o destino do mundo e evitar que o futuro trágico se concretize. Sua história mostra as consequências das escolhas feitas ao longo da jornada e adiciona um tom mais profundo e emocional à narrativa."
    }
  },
  {
    nome: "Beth",
    imagem: require("../images/guardianimage4.png"),
    descricao: "Beth é uma das principais antagonistas de Guardian Tales e uma das figuras mais poderosas entre os Invasores. Ela é conhecida por sua força esmagadora e presença intimidadora, sendo um grande obstáculo para o Knight e seus aliados. Ao longo da história, Beth demonstra não apenas poder, mas também uma personalidade complexa, revelando que o conflito vai além de uma simples luta entre bem e mal. Seus confrontos com o protagonista são momentos marcantes da narrativa."
  },
  {
    nome: "Camilla",
    imagem: require("../images/guardianimage5.png"),
    descricao: "Camilla é a rainha de Kanterbury e irmã da Pequena Princesa. Como líder do reino, ela carrega a responsabilidade de proteger seu povo durante a invasão. Determinada e estratégica, Camilla toma decisões difíceis para tentar conter os Invasores e manter a estabilidade do reino. Sua presença representa autoridade e sacrifício, mostrando o peso de governar em tempos de crise."
  },
  {
    nome: "Lilith",
    imagem: require("../images/guardianimage6.png"),
    descricao: "Lilith é uma figura importante no mundo dos demônios e uma personagem com grande influência e inteligência. Diferente de uma vilã tradicional, ela possui motivações próprias e uma personalidade forte, muitas vezes agindo de forma estratégica e imprevisível. Sua participação na história mostra que o mundo de Guardian Tales é cheio de nuances, onde nem todos os conflitos são simples e as alianças podem mudar conforme os interesses."
  }
]

  return (
    <ScrollView style={{ flex: 1 }}>

      <View style={styles.container}>

        <Text style={styles.destaque}>Bem-vindo, {usuario}</Text>

        <Text style={styles.mensagem}>
          Guardian Tales conta a história de um cavaleiro que protege a princesa
          enquanto enfrenta invasores e busca salvar o reino.
        </Text>

        {personagens.map((item, index) => (
          <View key={index} style={styles.card}>

            <Image source={item.imagem} style={styles.imagem} />

            <Text style={styles.destaque}>{item.nome}</Text>
            <Text style={styles.texto}>{item.descricao}</Text>

            {item.extra && (
              <>
                <Text style={[styles.destaque, { color: "#facc15" }]}>
                  {item.extra.nome}
                </Text>

                <Image source={item.extra.imagem} style={styles.imagem} />

                <Text style={styles.texto}>{item.extra.descricao}</Text>
              </>
            )}

          </View>
        ))}

      </View>

    </ScrollView>
  )
}