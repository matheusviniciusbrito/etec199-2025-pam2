import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Resultados.styles';


export default function Resultados({ route }) {
  const navigation = useNavigation();
  const { score, total, username } = route.params;

  // Mensagem personalizada
  let mensagem = '';
  if (score === total) {
    mensagem = 'Parabéns, ' + (username || 'usuário') + '! Você acertou tudo!';
  } else if (score >= total * 0.7) {
    mensagem = 'Muito bom, ' + (username || 'usuário') + '! Você foi muito bem!';
  } else if (score >= total * 0.4) {
    mensagem = 'Legal, ' + (username || 'usuário') + '! Mas dá pra melhorar!';
  } else {
    mensagem = 'Continue tentando, ' + (username || 'usuário') + '! O importante é aprender!';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado do Quiz</Text>
  <Text style={[styles.scoreText, { textAlign: 'center' }]}>{mensagem}</Text>
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
