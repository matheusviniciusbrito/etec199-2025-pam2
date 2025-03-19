import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function App() {
  const scrollViewRef = useRef(null);
  const [sectionPositions, setSectionPositions] = useState({});

  const handleLayout = (name) => (event) => {
    const { y } = event.nativeEvent.layout;
    setSectionPositions((prev) => ({ ...prev, [name]: y }));
  };

  const scrollToSection = (name) => {
    if (scrollViewRef.current && sectionPositions[name] !== undefined) {
      scrollViewRef.current.scrollTo({ y: sectionPositions[name] - 10, animated: true });
    }
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.content}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>A História de Alan Turing</Text>
        </View>

        {/* Introdução */}
        <View onLayout={handleLayout("introducao")} style={styles.section}>
          <Text style={styles.subtitle}>Introdução</Text>
          <Text style={styles.text}>
            Alan Mathison Turing, nasceu em Londres, no dia 23 de junho de 1912,
            e faleceu em Wilmslow, no dia 7 de junho de 1954. Foi um matemático,
            lógico, cientista da computação, filósofo, criptoanalista e biólogo
            teórico britânico. Turing é frequentemente considerado o pai da
            ciência da computação e da inteligência artificial.
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: "https://i.em.com.br/mSw6-EGGak7UggjSUIpoirdZ--k=/1200x720/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/06/28/1513439/alan-turing_1_104398.jpeg",
            }}
            resizeMode="cover"
          />
        </View>

        {/* Vida e Contribuições */}
        <View onLayout={handleLayout("vida")} style={styles.section}>
          <Text style={styles.subtitle}>Vida e Contribuições</Text>
          <Text style={styles.text}>
            Alan Turing foi essencial na quebra do código Enigma, usado pela
            Alemanha nazista durante a Segunda Guerra Mundial. Seu trabalho no
            desenvolvimento das primeiras máquinas de computação lançou as bases
            para os computadores modernos. Turing também desenvolveu o famoso
            "Teste de Turing", um critério para determinar a inteligência
            artificial.
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: "https://s2.glbimg.com/Itxm8zMY5FkZ0174hL2RghDDLKw=/e.glbimg.com/og/ed/f/original/2015/02/10/ojogodaimitacao27.jpg",
            }}
            resizeMode="cover"
          />
        </View>

        {/* Perseguição e Morte */}
        <View onLayout={handleLayout("perseguicao")} style={styles.section}>
          <Text style={styles.subtitle}>Perseguição e Morte</Text>
          <Text style={styles.text}>
            Em 1952, Turing foi condenado por "indecência grave" devido à sua
            homossexualidade, que era ilegal no Reino Unido na época. Ele foi
            forçado a passar por um tratamento de castração química. Dois anos
            depois, morreu em circunstâncias suspeitas, oficialmente
            classificadas como suicídio.
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: "https://warren.com.br/magazine/wp-content/uploads/2022/02/alan-turing-2-1024x684.jpg",
            }}
            resizeMode="cover"
          />
        </View>

        {/* Legado */}
        <View onLayout={handleLayout("legado")} style={styles.section}>
          <Text style={styles.subtitle}>Legado</Text>
          <Text style={styles.text}>
            Em 2013, Turing recebeu um perdão póstumo da Rainha Elizabeth II, e
            hoje é celebrado como um dos maiores gênios da história. Seu impacto
            na computação e inteligência artificial é imensurável, sendo
            homenageado com prêmios, filmes e estudos em sua honra.
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: "https://aventurasnahistoria.com.br/media/_versions/hard_news/alan_turing_elizabeth_ii_widelg.jpg",
            }}
            resizeMode="cover"
          />
        </View>

        {/* Desenvolvedores */}
        <View onLayout={handleLayout("desenvolvedores")} style={styles.section}>
          <Text style={styles.subtitle}>Desenvolvedores</Text>
          <Text style={styles.text}>
            Este aplicativo foi desenvolvido por Anderson Reis e Matheus
            Vinicius, apaixonados por tecnologia e entusiastas da ciência da
            computação. Inspirados por Alan Turing, buscamos criar soluções
            inovadoras e disseminar conhecimento sobre a história da computação.
          </Text>
          <View style={styles.devsContainer}>
            <View style={styles.developerCard}>
              <Text style={styles.devName}>Anderson Reis</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => openLink("https://github.com/|EuAndersonDev")}
                >
                  <Image
                    style={styles.icon}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    openLink(
                      "https://www.linkedin.com/in/anderson-reis-5407311b3/"
                    )
                  }
                >
                  <Image
                    style={styles.icon}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.developerCard}>
              <Text style={styles.devName}>Matheus Vinicius</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() =>
                    openLink("https://github.com/matheusviniciusbrito")
                  }
                >
                  <Image
                    style={styles.icon}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    openLink(
                      "https://www.linkedin.com/in/matheus-vinicius-4b6769326/"
                    )
                  }
                >
                  <Image
                    style={styles.icon}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Navbar fixa */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => scrollToSection("introducao")}
        >
          <Text style={styles.navText}>Introdução</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => scrollToSection("vida")}
        >
          <Text style={styles.navText}>Vida</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => scrollToSection("perseguicao")}
        >
          <Text style={styles.navText}>Perseguição</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => scrollToSection("legado")}
        >
          <Text style={styles.navText}>Legado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => scrollToSection("desenvolvedores")}
        >
          <Text style={styles.navText}>Desenvolvedores</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 120, 
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3, // Android
    shadowColor: "#000", // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#333",
    paddingVertical: 10,
  },
  navButton: {
    padding: 5,
  },
  navText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  devsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  developerCard: {
    alignItems: "center",
    width: "40%",
  },
  devName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  icon: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
  },
});


