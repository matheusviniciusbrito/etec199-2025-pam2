import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default function App() {

  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [n3, setN3] = useState();
  const [n4, setN4] = useState();
  const [resultado, setResultado] = useState();

  const media = () => {
    let r = parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4);
    r = r / 4;
    setResultado(r);
  }
  

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.titulo}> Média de 4 valores</Text>
      </View>

      <View>
        <Text>Primeiro número: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o primeiro número'
          onChangeText={n1 => setN1(n1)}
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text>Segundo número: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o segundo número'
          onChangeText={n2 => setN2(n2)}
          keyboardType="numeric"
        />
      </View>  

      <View>
        <Text>Terceiro número: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o terceiro número'
          onChangeText={n3 => setN3(n3)}
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text>Quarto número: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o quarto número'
          onChangeText={n4 => setN4(n4)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.botao}>
        <Button
          title='Calcular'
          onPress={()=>media()}
        />
      </View>

      <View>
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      </View>  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
