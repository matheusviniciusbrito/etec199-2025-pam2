import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './Login.styles';


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
            <Image source={require('../../../assets/mub3-logo.png')} style={styles.logo} resizeMode="contain" />
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
