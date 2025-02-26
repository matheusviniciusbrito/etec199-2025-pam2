import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A historia de Allan Turing</Text>
      <View style={styles.container}>
        <Text style={styles.subtitle}> Introdução</Text>
        <Text style={styles.text}>
          Alan Mathison Turing, nasceu em Londres, no dia 23 de junho de 1912,
          e faleceu em Wilmslow, no dia 7 de junho de 1954. Foi um matemático,
          lógico, cientista da computação, filósofo, criptoanalista e
          biólogo teórico britânico. Turing é frequentemente considerado o pai
          da ciência da computação e da inteligência artificial.
        </Text>
        <Image
          style={styles.imagem}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
          }}
        />
      </View>
      <View style={styles.section}>
'        <Text style={styles.subtitle}> Vida</Text>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  section: {
    marginTop: 20,


  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  imagem: {
    width: 250,
    height: 250,
  },
});
