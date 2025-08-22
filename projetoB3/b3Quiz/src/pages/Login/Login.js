import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Logo from '../../../assets/mub3-logo.svg';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS sobe com padding, Android com height
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          <View style={styles.imgs}>
            <Logo width={260} style={styles.logo} />
            <Ionicons name="person-circle-outline" size={300} color="#fff" style={{ marginVertical: 20 }} />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />

          <View style={styles.buttonsSection}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => navigation.navigate('Quiz', { username })}
            >
              <Text style={styles.buttonText1}>Continuar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText2}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  imgs: {
    marginTop: 40,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderRadius: 4,
    padding: 12,
    color: '#000', // aqui coloquei preto pq antes tava branco em fundo branco
    width: '80%',
    height: 54,
    marginBottom: 20,
  },
  logo: {
    width: 180,
    height: 80,
  },
  textSection: {
    alignItems: 'center',
  },
  buttonsSection: {
    marginBottom: 40,
    alignItems: 'center',
  },
  buttonPrimary: {
    width: 300,
    alignItems: 'center',
    backgroundColor: '#5ED0F3',
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 30,
  },
  buttonSecondary: {
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5ED0F3',
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: -30,
  },
  buttonText1: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonText2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    color: '#F7F7F7',
    fontSize: 18,
    margin: 18,
    fontWeight: '300',
    textAlign: 'right',
    marginBottom: 40,
  },
});
