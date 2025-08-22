import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/mub3-logo.svg';
import quizData from '../../data/quizData.json';

const Quiz = () => {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    setQuiz(quizData);
  }, []);

  if (!quiz) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>Carregando...</Text>
      </View>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

  function handleContinue() {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null);
    } else {
      navigation.navigate('Resultados', { score: score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0), total: quizData.questions.length });
    }
  }

  function renderOption({ item, index }) {
    const isSelected = selectedOption === item;
    const borderColor = isSelected ? '#5ED0F3' : '#fff';
    
    return (
      <TouchableOpacity
        style={[styles.optionBox, { borderColor }]}
        onPress={() => handleOptionSelect(item)}
        activeOpacity={0.8}
      >
        <Text style={styles.optionLabel}>{item}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Logo width={120} height={40} style={styles.logo} />

      <View style={styles.imagePlaceholder}>
        <Text style={styles.imagePlaceholderText}>[Imagem da pergunta]</Text>
      </View>

      <Text style={styles.questionTitle}>{currentQuestion.question}</Text>

      <FlatList
        data={currentQuestion.options}
        keyExtractor={(_, i) => String(i)}
        renderItem={renderOption}
        numColumns={2}
        contentContainerStyle={styles.optionsList}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#0D0D0D" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.continueBtn, { opacity: selectedOption === null ? 0.6 : 1 }]}
          onPress={handleContinue}
          disabled={selectedOption === null}
        >
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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

export default Quiz;