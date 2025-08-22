// Estilos para a página Quiz
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    marginTop: 10,
    marginBottom: 8,
  },
  imagePlaceholder: {
    width: '80%',
    height: 150,
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: '#888',
    fontStyle: 'italic',
  },
  questionTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 12,
  },
  optionsList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionBox: {
    backgroundColor: '#141414',
    width: 140,
    height: 140,
    margin: 8,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  optionLabel: {
    color: '#fff',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginTop: 12,
  },
  homeBtn: {
    backgroundColor: '#5ED0F3',
    width: 52,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtn: {
    backgroundColor: '#5ED0F3',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  continueText: {
    color: '#0D0D0D',
    fontWeight: 'bold',
  },
});

export default styles;
