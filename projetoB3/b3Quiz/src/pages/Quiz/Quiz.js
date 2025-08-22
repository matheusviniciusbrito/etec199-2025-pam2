import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './Quiz.styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import quizData from '../../data/quizData.json';

import bolsaImg from '../../../assets/bolsa.png';
import acoesImg from '../../../assets/acoes.png';
import investimentoImg from '../../../assets/investimento.png';
import pregaoImg from '../../../assets/pregao.png';
import museuImg from '../../../assets/museu.png';

const imageMap = {
  'bolsa.png': bolsaImg,
  'acoes.png': acoesImg,
  'investimento.png': investimentoImg,
  'pregao.png': pregaoImg,
  'museu.png': museuImg,
};


const Quiz = ({ route }) => {
  const navigation = useNavigation();
  const username = route?.params?.username || '';
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
      navigation.navigate('Resultados', {
        score: score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0),
        total: quizData.questions.length,
        username: username
      });
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


  function getImageSource(imageName) {
    if (!imageName) return null;
    return imageMap[imageName] || null;
  }

  return (
    <View style={styles.container}>
    <Image source={require('../../../assets/mub3-logo.png')} style={styles.logo} resizeMode="contain" />

      <View style={styles.imagePlaceholder}>
        {currentQuestion.image ? (
          <Image
            source={getImageSource(currentQuestion.image)}
            style={{ width: 150, height: 150, resizeMode: 'contain' }}
            accessibilityLabel="Imagem da pergunta"
          />
        ) : (
          <Text style={styles.imagePlaceholderText}>[Imagem da pergunta]</Text>
        )}
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

export default Quiz;