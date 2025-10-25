import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles';

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDateInput, setBirthDateInput] = useState(''); // dd/mm/aaaa

  const BASE_URL = 'http://localhost:3333'; 

  const fetchUsers = () => {
    axios.get(`${BASE_URL}/users`)
      .then(response => {
        setUsers(Array.isArray(response.data) ? response.data : [response.data]);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados:', error);
        setUsers([{
          id: 'ERRO',
          name: 'Não foi possível carregar',
          email: 'Verifique o console',
          phone: 'e a URL da API',
          birthDate: 'N/A'
        }]);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function formatYmdToBr(ymd) {
    if (!ymd || typeof ymd !== 'string' || !ymd.includes('-')) return ymd || '';
    const [y, m, d] = ymd.split('-');
    if (!y || !m || !d) return ymd;
    return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${String(y)}`;
  }


  function formatPhone(value) {
    const digits = (value || '').replace(/\D/g, '').slice(0, 11); // só nmro
    const ddd = digits.slice(0, 2);
    const rest = digits.slice(2);
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${ddd}`;
    if (rest.length <= 5) return `(${ddd}) ${rest}`;
    return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
  }


  function formatDateMask(value) {
    const digits = (value || '').replace(/\D/g, '').slice(0, 8); // só número
    const len = digits.length;
    if (len <= 2) return digits; // d, dd
    if (len <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`; // dd/m, dd/mm
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`; // dd/mm/aaaa
  }

  function ddmmyyyyToIso(str) {
    if (!str) return null;
    const cleaned = str.replace(/[^0-9]/g, '');
    if (cleaned.length !== 8) return null;
    const dd = cleaned.slice(0, 2);
    const mm = cleaned.slice(2, 4);
    const yyyy = cleaned.slice(4, 8);
    const day = Number(dd), month = Number(mm), year = Number(yyyy);
    if (month < 1 || month > 12 || day < 1 || day > 31 || year < 1900) return null;
    const date = new Date(`${yyyy}-${mm}-${dd}T00:00:00`);
    if (isNaN(date.getTime())) return null;
    if (date.getUTCFullYear() !== year || date.getUTCMonth() + 1 !== month || date.getUTCDate() !== day) return null;
    return `${yyyy}-${mm}-${dd}`;
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setBirthDateInput('');
  };

  const handleSubmit = async () => {
    if (!name || !email || !phone || !birthDateInput) {
      Alert.alert('Campos obrigatórios', 'Preencha nome, email, telefone e data de nascimento.');
      return;
    }
    const iso = ddmmyyyyToIso(birthDateInput);
    if (!iso) {
      Alert.alert('Data inválida', 'Use o formato dd/mm/aaaa.');
      return;
    }
    try {
      await axios.post(`${BASE_URL}/users`, {
        name,
        email,
        phone,
        birthDate: iso,
      });
      setShowModal(false);
      clearForm();
      fetchUsers();
    } catch (err) {
      console.error('Erro ao criar usuário:', err);
      Alert.alert('Erro', 'Não foi possível criar o usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.addButtonText}>Novo usuário</Text>
      </TouchableOpacity>
      <ScrollView nestedScrollEnabled>
        <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={styles.hScrollContent}>
          <View style={[styles.table, styles.tableMinWidth]}>
            <View style={styles.tableRowHeader}>
              <Text style={[styles.tableHeader, styles.colName]}>Nome</Text>
              <Text style={[styles.tableHeader, styles.colEmail]}>Email</Text>
              <Text style={[styles.tableHeader, styles.colPhone]}>Telefone</Text>
              <Text style={[styles.tableHeader, styles.tableHeaderLast, styles.colBirth]}>Nascimento</Text>
            </View>
            {users.map(user => (
              <View key={user.id} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.colName]} numberOfLines={1} ellipsizeMode="tail">{user.name}</Text>
                <Text style={[styles.tableCell, styles.colEmail]} numberOfLines={1} ellipsizeMode="tail">{user.email}</Text>
                <Text style={[styles.tableCell, styles.colPhone]} numberOfLines={1} ellipsizeMode="tail">{user.phone}</Text>
                <Text style={[styles.tableCell, styles.tableCellLast, styles.colBirth]} numberOfLines={1} ellipsizeMode="tail">{user.birthDate ? formatYmdToBr(user.birthDate) : 'N/A'}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              keyboardType="number-pad"
              value={phone}
              onChangeText={(v) => setPhone(formatPhone(v))}
              maxLength={15}
            />
            <TextInput
              style={styles.input}
              placeholder="Data de nascimento (dd/mm/aaaa)"
              keyboardType="number-pad"
              value={birthDateInput}
              onChangeText={(v) => setBirthDateInput(formatDateMask(v))}
              maxLength={10}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => { setShowModal(false); }}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonPrimary, styles.buttonSpacer]} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}
