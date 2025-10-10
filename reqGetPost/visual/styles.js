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
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
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
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default styles;
