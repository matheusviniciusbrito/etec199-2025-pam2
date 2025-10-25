import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <View style={{ gap: 12 }}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Users')}>
          <Text style={styles.addButtonText}>Ir para Usuários</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Map')}>
          <Text style={styles.addButtonText}>Ir para Mapa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
