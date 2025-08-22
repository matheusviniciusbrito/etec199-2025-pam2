// Estilos para a página Login
import { StyleSheet } from 'react-native';

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
    color: '#000',
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

export default styles;
