import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [erro, setErro] = useState('');
  const [submitted, setSubmitted] = useState(null);

  const buscarEndereco = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setErro('CEP não encontrado.');
        setRua('');
        setBairro('');
        setCidade('');
        setEstado('');
      } else {
        setRua(response.data.logradouro || '');
        setBairro(response.data.bairro || '');
        setCidade(response.data.localidade || '');
        setEstado(response.data.uf || '');
        setErro('');
      }
    } catch (error) {
      setErro('Ocorreu um erro na consulta.');
      setRua('');
      setBairro('');
      setCidade('');
      setEstado('');
    }
  };

  const handleSubmit = () => {
    // monta o objeto com os dados atuais e grava em `submitted`
    const dados = {
      nome,
      telefone,
      email,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
    };
    setSubmitted(dados);
    setErro('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titCep}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={[styles.row, { justifyContent: 'flex-start' }]}> 
        <TextInput
          style={[styles.input, styles.inputSmall, { marginRight: 8 }]}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
          maxLength={9}
        />
        <TouchableOpacity style={styles.btnCep} onPress={buscarEndereco}>
          <Text style={styles.btnCepText}>Buscar CEP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 2, marginRight: 8 }]}
          placeholder="Rua"
          value={rua}
          onChangeText={setRua}
        />
        <TextInput
          style={[styles.input, styles.inputSmall]}
          placeholder="Número"
          value={numero}
          onChangeText={setNumero}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Bairro"
          value={bairro}
          onChangeText={setBairro}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 2, marginRight: 8 }]}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado}
        />
      </View>

      <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
        <Text style={styles.btnSubmitText}>Enviar</Text>
      </TouchableOpacity>

      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      {submitted ? (
        <View style={styles.result}>
          <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Dados submetidos:</Text>
          <Text>Nome: {submitted.nome}</Text>
          <Text>Telefone: {submitted.telefone}</Text>
          <Text>Email: {submitted.email}</Text>
          <Text>CEP: {submitted.cep}</Text>
          <Text>Rua: {submitted.rua}</Text>
          <Text>Número: {submitted.numero}</Text>
          <Text>Bairro: {submitted.bairro}</Text>
          <Text>Cidade: {submitted.cidade}</Text>
          <Text>Estado: {submitted.estado}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  titCep: {
    textAlign: 'center',
    fontSize: 26,
    color: '#1976D2',
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 12,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#e3f2fd',
  },
  input: {
    backgroundColor: '#f7fafd',
    width: '100%',
    height: 40,
    borderColor: '#b0bec5',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
    paddingLeft: 12,
    fontSize: 15,
    color: '#263238',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  inputSmall: {
    width: 160,
    minWidth: 100,
    maxWidth: 160,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
    gap: 8,
  },
  error: {
    color: '#d32f2f',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
  },
  btnCep: {
    backgroundColor: '#1976D2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginRight: 8,
  },
  btnCepText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  btnSubmit: {
    backgroundColor: '#388E3C',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginTop: 10,
    alignSelf: 'center',
    width: '60%',
  },
  btnSubmitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  result: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#90caf9',
    width: '90%',
    textAlign: 'left',
    borderRadius: 10,
    backgroundColor: '#e3f2fd',
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
});
