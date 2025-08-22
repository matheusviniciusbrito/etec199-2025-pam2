import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './Home.styles';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
      <Image source={require('../../../assets/mub3-logo.png')} style={styles.logo} resizeMode="contain" />

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
