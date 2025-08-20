import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Quiz({ navigation, route }) {
  // Dados podem vir por route.params.quiz (JSON) ou ser buscados do DB
  const [quiz, setQuiz] = useState(route?.params?.quiz || null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!quiz) {
      // EXEMPLO: buscar do banco / API
      // substitua fetchQuizFromDB() por sua chamada real
      async function fetchQuizFromDB() {
        // TODO: troque pelo fetch/axios para seu backend ou sqlite/localstorage
        // const resp = await fetch('https://seu-servidor/api/quiz/1');
        // const data = await resp.json();
        // setQuiz(data);
        const sample = SAMPLE_QUIZ; // fallback local (ver constante abaixo)
        setQuiz(sample);
      }
      fetchQuizFromDB();
    }
  }, []);

  if (!quiz) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>Carregando...</Text>
      </View>
    );
  }

  const question = quiz.questions[currentIndex];

  function onSelectOption(idx) {
    setSelected(idx);
  }

  function onContinue() {
    // TODO: salvar resposta no DB se desejar (ex: enviar resultado parcial)
    // exemplo: await saveAnswerToDB({ questionId: question.id, selectedIndex: selected });

    // avançar para próxima pergunta
    const next = currentIndex + 1;
    if (next < quiz.questions.length) {
      setCurrentIndex(next);
      setSelected(null);
    } else {
      // finalizar -> navegar para tela de resultado ou retornar
      navigation.navigate('Results', { quizResult: { quizId: quiz.id } }); // Fixed missing closing brackets
    }
  }

  // renderiza cada opção como um quadrado com imagem (2 colunas)
  function renderOption({ item, index }) {
    const isSelected = selected === index;
    const borderColor = isSelected ? '#5ED0F3' : '#fff';
    // Suporta imageUrl remoto (item.image) ou local (item.localAsset require)
    const imageSource = item.image ? { uri: item.image } : item.localAsset ? item.localAsset : null;

    return (
      <TouchableOpacity
        style={[styles.optionBox, { borderColor }]}
        onPress={() => onSelectOption(index)}
        activeOpacity={0.8}
      >
        {imageSource ? (
          <Image source={imageSource} style={styles.optionImage} resizeMode="contain" />
        ) : null}
        {item.text ? <Text style={styles.optionLabel}>{item.text}</Text> : null}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* logo: se usar SVG local, verifique react-native-svg / svgr; caso contrário, use PNG */}
      <Image source={require('../../../assets/mub3-logo.svg')} style={styles.logo} resizeMode="contain" />

      <Text style={styles.questionTitle}>{question.title}</Text>

      <FlatList
        data={question.options}
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
          style={[styles.continueBtn, { opacity: selected === null ? 0.6 : 1 }]}
          onPress={onContinue}
          disabled={selected === null}
        >
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* Estrutura JSON esperada:
{
  id: "quiz1",
  title: "Título do quiz",
  questions: [
    {
      id: "q1",
      title: "QUAL O LUGAR ONDE PRESERVAMOS MEMÓRIAS?",
      options: [
        { text: "Opção A", image: "https://meuservidor.com/img1.png" },
        { text: "Opção B", localAsset: require('../../../assets/img2.png') },
        ...
      ]
    },
    ...
  ]
}
*/

const SAMPLE_QUIZ = {
  id: 'demo',
  title: 'Museu Quiz',
  questions: [
    {
      id: 'q1',
      title: 'QUAL O LUGAR ONDE PRESERVAMOS MEMÓRIAS?',
      options: [
        { text: 'Museu', image: 'https://i.imgur.com/1.png' },
        { text: 'Biblioteca', image: 'https://i.imgur.com/2.png' },
        { text: 'Arquivo', image: 'https://i.imgur.com/3.png' },
        { text: 'Galeria', image: 'https://i.imgur.com/4.png' },
      ],
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 60,
    marginTop: 10,
    marginBottom: 8,
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
  optionImage: {
    width: 80,
    height: 80,
  },
  optionLabel: {
    color: '#fff',
    fontSize: 12,
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
    position: 'absolute',
    bottom: 18,
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