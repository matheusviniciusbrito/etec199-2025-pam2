import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/mub3-logo.svg')} 
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Text style={styles.subtitle}>
        Museu da bolsa do Brasil nasceu do desejo de preservar e compartilhar a
        história do mercado de capitais brasileiro
      </Text>

      <TouchableOpacity 
        style={styles.buttonPrimary} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Jogar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>Saiba mais</Text>
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
    width: 180,
    height: 80,
    marginBottom: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
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
