
import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#6bd45dff", 
  },
  title: {
    fontSize: 26,
    color: "#000000ff", 
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#c8e2a6ff", 
  },
  input: {
    width: "80%",
    borderColor: "#000000ff",
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#91ff83ff" 
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#98ee7eff"
  },
  imcResult: {
    fontSize: 18,
    color: "#000000ff", 
    marginTop: 10,
    fontWeight: "bold"
  }
});

export default function Index() {
  // Bitola de fio
  const [corrente, setCorrente] = useState("");
  const [distancia, setDistancia] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularBitola = () => {
    const correnteValue = parseFloat(corrente.replace(",", "."));
    const distanciaValue = parseFloat(distancia.replace(",", "."));
    if (!correnteValue || !distanciaValue) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }
    const bitola110 = (2 * correnteValue * distanciaValue) / 294.64;
    const bitola220 = (2 * correnteValue * distanciaValue) / 510.4;
    setResultado(
      `Bitola para 110V: ${bitola110.toFixed(2)} mm² | Bitola para 220V: ${bitola220.toFixed(2)} mm²`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Bitola de Fio</Text>
      <TextInput
        placeholder="Corrente (A)"
        style={styles.input}
        value={corrente}
        onChangeText={setCorrente}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Distância (m)"
        style={styles.input}
        value={distancia}
        onChangeText={setDistancia}
        keyboardType="numeric"
      />
      <Button
        title="Calcular Bitola"
        color="#000000ff"
        onPress={calcularBitola}
      />
      {resultado !== "" && (
        <Text style={styles.imcResult}>{resultado}</Text>
      )}
    </View>
  );
}
