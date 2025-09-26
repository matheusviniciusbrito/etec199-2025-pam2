import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
  },
  subtitulo: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 32,
    color: '#555',
  },
  formRow: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d4d9e2',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  botaoSecundario: {
    backgroundColor: '#e2e8f0',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  botaoTextoSecundario: {
    color: '#1e293b',
  },
  resultadoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: '#d4d9e2',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  resultadoTexto: {
    fontSize: 16,
    lineHeight: 22,
    color: '#111827',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
