// Estilos para a página Home
import { StyleSheet } from 'react-native';

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
    width: 300,
    height: 150,
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

export default styles;
