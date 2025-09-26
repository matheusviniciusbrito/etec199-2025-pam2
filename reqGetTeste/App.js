import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import styles from './styles';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/api/users')
      .then(response => {
        setUsers(Array.isArray(response.data) ? response.data : [response.data]);
      })
      .catch(error => {
        console.error("Houve um erro ao buscar os dados:", error);

        setUsers([{
          id: "ERRO",
          name: "Não foi possível carregar",
          email: "Verifique o console",
          phone: "e a URL da API",
          birthDate: "N/A"
        }]);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>
      <ScrollView>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableHeader}>Nome</Text>
            <Text style={styles.tableHeader}>Email</Text>
            <Text style={styles.tableHeader}>Telefone</Text>
            <Text style={styles.tableHeader}>Nascimento</Text>
          </View>
          {users.map(user => (
            <View key={user.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{user.name}</Text>
              <Text style={styles.tableCell}>{user.email}</Text>
              <Text style={styles.tableCell}>{user.phone}</Text>
              <Text style={styles.tableCell}>{new Date(user.birthDate).toLocaleDateString('pt-BR')}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}