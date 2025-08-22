import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Resultados({ route, navigation }) {
  const { score, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado do Quiz</Text>
      <Text style={styles.scoreText}>
        Você acertou {score} de {total} perguntas!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#5ED0F3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#0D0D0D',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
