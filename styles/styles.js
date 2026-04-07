import { StyleSheet } from "react-native"

export default StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0f172a",
    minHeight: "100%"
  },

  containerLogin: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0f172a"
  },

  titulo: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold"
  },

  input: {
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#334155"
  },

  botao: {
    backgroundColor: "#38bdf8",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },

  textoBotao: {
    color: "#000",
    fontWeight: "bold"
  },

  texto: {
    color: "#e2e8f0",
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center"
  },

  destaque: {
    fontSize: 20,
    color: "#38bdf8",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },

  mensagem: {
    color: "#94a3b8",
    marginBottom: 20,
    textAlign: "center"
  },

grid: {
  flexDirection: "column",
  alignItems: "center"
},

imagemGrid: {
  width: 120,
  height: 120,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: "#facc15",
  resizeMode: "cover"
},

  tooltip: {
    position: "absolute",
    top: -80,
    left: -20,
    width: 180,
    backgroundColor: "#020617",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#facc15",
    zIndex: 10
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },

  tituloTooltip: {
    color: "#cbd5f5",
    fontSize: 12
  },

imagemPersonagem: {
  width: "100%",
  height: 260,
  borderRadius: 15,
  marginBottom: 20,
  resizeMode: "contain",
  backgroundColor: "#020617"
},
  nomePersonagem: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },

  textoLore: {
    color: "#e2e8f0",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center"
  },
  imagemPerfil: {
  width: 120,
  height: 120,
  borderRadius: 60,
  marginBottom: 15,
  borderWidth: 2,
  borderColor: "#38bdf8"
},

nomePerfil: {
  fontSize: 22,
  color: "#fff",
  fontWeight: "bold",
  marginBottom: 10
}

})