import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    alignSelf: 'center',
    backgroundColor: '#111827',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableMinWidth: {
    // define uma largura mínima para forçar scroll horizontal em telas estreitas
    minWidth: 720,
  },
  hScrollContent: {
    // pode ajustar padding se necessário
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#ddd',
    minWidth: 0,
  },
  tableHeaderLast: {
    borderRightWidth: 0,
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#ddd',
    minWidth: 0,
  },
  tableCellLast: {
    borderRightWidth: 0,
  },
  // Larguras proporcionais por coluna (ajustáveis se necessário)
  colName: { flex: 1.3 },
  colEmail: { flex: 1.6 },
  colPhone: { flex: 1.1 },
  colBirth: { flex: 1.0 },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    elevation: 2,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  buttonPrimary: {
    backgroundColor: '#111827',
  },
  buttonSecondary: {
    backgroundColor: '#e5e7eb',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  // espaçamento manual entre os botões (evita depender de 'gap')
  buttonSpacer: {
    marginLeft: 8,
  },
});

export default styles;
