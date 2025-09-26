import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './styles';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const g = parseFloat(gasolina.replace(',', '.'));
    const a = parseFloat(alcool.replace(',', '.'));

    if (isNaN(g) || isNaN(a) || g <= 0 || a <= 0) {
      setResultado('Preencha valores válidos (números positivos).');
      return;
    }
    if (a <= g * 0.7) {
      const perc = ((a / g) * 100).toFixed(1);
      setResultado(`Abasteça com Álcool (Álcool = ${perc}% do preço da Gasolina).`);
    } else {
      const perc = ((a / g) * 100).toFixed(1);
      setResultado(`Abasteça com Gasolina (Álcool = ${perc}% do preço da Gasolina).`);
    }
  }

  function limpar() {
    setGasolina('');
    setAlcool('');
    setResultado('');
  }

  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Gasolina ou Alcool?</Text>
        <Text style={styles.subtitulo}>insira os preços por litro:</Text>

        <View style={styles.formRow}> 
          <Text style={styles.label}>Gasolina (R$)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 5,79"
            placeholderTextColor="#9ca3af"
            keyboardType="decimal-pad"
            value={gasolina}
            onChangeText={setGasolina}
            returnKeyType="next"
          />
        </View>

        <View style={styles.formRow}> 
          <Text style={styles.label}>Álcool (R$)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 3,89"
              placeholderTextColor="#9ca3af"
              keyboardType="decimal-pad"
              value={alcool}
              onChangeText={setAlcool}
              returnKeyType="done"
              onSubmitEditing={calcular}
            />
        </View>

        <View style={styles.buttonsWrapper}>
          <TouchableOpacity style={styles.botao} onPress={calcular}>
            <Text style={styles.botaoTexto}>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoSecundario]} onPress={limpar}>
            <Text style={[styles.botaoTexto, styles.botaoTextoSecundario]}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {resultado !== '' && (
          <View style={styles.resultadoBox}>
            <Text style={styles.resultadoTexto}>{resultado}</Text>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
  );
}
