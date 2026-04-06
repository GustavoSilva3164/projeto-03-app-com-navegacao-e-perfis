import { StyleSheet } from "react-native"

export default StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0f172a"
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

  card: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 15
  },

  imagem: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "contain"
}

})