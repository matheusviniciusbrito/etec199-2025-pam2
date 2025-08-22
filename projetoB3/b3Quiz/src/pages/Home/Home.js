import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from '../../../assets/mub3-logo.svg';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Logo width={260}style={styles.logo} />

        <Text style={styles.subtitle}>
          Museu da bolsa do Brasil nasceu do desejo de preservar e compartilhar a
          história do mercado de capitais brasileiro
        </Text>
      </View>

      <View style={styles.buttonsSection}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText1}>Jogar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText2}>Saiba mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    height: '100dvw',
  },
  logo: {
    width: 180,
    height: 80,
    marginBottom: 20,
  },
  textSection: {
    alignItems: 'center',
  },
  buttonsSection: {
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
