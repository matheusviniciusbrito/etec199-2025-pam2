import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../../../assets/mub3-logo.svg')} 
        style={{ width: 160, height: 70, marginBottom: 10 }} 
        resizeMode="contain"
      />

      <Ionicons name="person-circle-outline" size={100} color="#fff" style={{ marginVertical: 20 }} />

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity 
        style={styles.buttonPrimary} 
        onPress={() => navigation.navigate('Quiz', { username })}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonSecondary} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#5ED0F3',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
    width: '80%',
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: '#5ED0F3',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: '#5ED0F3',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
