import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import { useState } from 'react';
import styles from './styles';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [recomendacao, setRecomendacao] = useState(null); // 'gasolina' | 'alcool'
  const [percentual, setPercentual] = useState(null); // number

  const gasolinaImg = require('./assets/gasolina.jpg');
  const alcoolImg = require('./assets/etanol.jpg');

  function calcular() {
    const g = parseFloat(gasolina.replace(',', '.'));
    const a = parseFloat(alcool.replace(',', '.'));

    if (isNaN(g) || isNaN(a) || g <= 0 || a <= 0) {
      setResultado('Preencha valores válidos (números positivos).');
      setModalVisible(false);
      setRecomendacao(null);
      setPercentual(null);
      return;
    }
    const perc = parseFloat(((a / g) * 100).toFixed(1));
    setPercentual(perc);

    if (a <= g * 0.7) {
      setRecomendacao('alcool');
      setResultado('');
    } else {
      setRecomendacao('gasolina');
      setResultado('');
    }
    setModalVisible(true);
  }

  function limpar() {
    setGasolina('');
    setAlcool('');
    setResultado('');
    setModalVisible(false);
    setRecomendacao(null);
    setPercentual(null);
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

        {/* Modal de Resultado */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>
                Melhor opção: {recomendacao === 'gasolina' ? 'Gasolina' : 'Álcool'}
              </Text>
              {typeof percentual === 'number' && (
                <Text style={styles.modalSubtitle}>
                  Álcool = {percentual}% do preço da Gasolina
                </Text>
              )}

              <View style={styles.imagesRow}>
                {/* Cartão Gasolina */}
                <View style={[styles.imageCard, recomendacao === 'gasolina' && styles.highlighted]}
                >
                  {recomendacao === 'gasolina' && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>Recomendado</Text>
                    </View>
                  )}
                  <Image
                    source={gasolinaImg}
                    style={styles.image}
                    resizeMode="cover"
                    accessibilityLabel="Imagem de uma bomba de gasolina"
                  />
                  <Text style={styles.imageLabel}>Gasolina</Text>
                </View>

                {/* Cartão Álcool */}
                <View style={[styles.imageCard, recomendacao === 'alcool' && styles.highlighted]}
                >
                  {recomendacao === 'alcool' && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>Recomendado</Text>
                    </View>
                  )}
                  <Image
                    source={alcoolImg}
                    style={styles.image}
                    resizeMode="cover"
                    accessibilityLabel="Imagem de etanol"
                  />
                  <Text style={styles.imageLabel}>Álcool</Text>
                </View>
              </View>

              <View style={styles.modalButtons}>
                <TouchableOpacity style={[styles.botao, styles.closeButton]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, styles.botaoSecundario]} onPress={limpar}>
                  <Text style={[styles.botaoTexto, styles.botaoTextoSecundario]}>Limpar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <StatusBar style="auto" />
      </View>
  );
}
