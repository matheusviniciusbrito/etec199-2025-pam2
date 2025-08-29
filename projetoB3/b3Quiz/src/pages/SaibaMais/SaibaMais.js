import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import conteudo from '../../data/saibaMaisConteudo.json';

const SectionRenderer = ({ section }) => {
  switch (section.layout) {
    case 'text':
      return section.paragrafos?.map((p, i) => (
        <Text key={i} style={styles.paragraph}>{p}</Text>
      ));
    case 'bullets':
      return section.bullets?.map((b, i) => (
        <View key={i} style={styles.bulletLine}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>{b}</Text>
        </View>
      ));
    case 'bullets-groups':
      return section.grupos?.map((g, gi) => (
        <View key={gi} style={{ marginBottom: 14 }}>
          {g.subtitulo && <Text style={styles.groupSubtitle}>{g.subtitulo}</Text>}
          {g.itens?.map((it, ii) => (
            <View key={ii} style={styles.bulletLine}>
              <View style={styles.bulletDot} />
              <Text style={styles.bulletText}>{it}</Text>
            </View>
          ))}
        </View>
      ));
    case 'faq':
      return section.faq?.map((item, i) => (
        <View key={i} style={styles.faqBox}>
          <Text style={styles.faqQuestion}>{item.q}</Text>
          <Text style={styles.faqAnswer}>{item.a}</Text>
        </View>
      ));
    case 'contact':
      return (
        <View style={{ marginTop: 4 }}>
          {section.email && <Text style={styles.contactLine}>E-mail: {section.email}</Text>}
          {section.telefone && <Text style={styles.contactLine}>Telefone: {section.telefone}</Text>}
          {section.endereco && <Text style={styles.contactLine}>Endereço: {section.endereco}</Text>}
          {Array.isArray(section.links) && section.links.map((l, i) => (
            <Text key={i} style={styles.linkLine}>{l.rotulo}: {l.url}</Text>
          ))}
        </View>
      );
    default:
      return <Text style={styles.paragraph}>Tipo de seção não suportado.</Text>;
  }
};

const SaibaMais = () => {
  const navigation = useNavigation();
  const sections = useMemo(
    () => (conteudo.sections || []).slice().sort((a, b) => (a.ordem || 999) - (b.ordem || 999)),
    []
  );
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!activeId && sections.length) setActiveId(sections[0].id);
  }, [sections, activeId]);

  const activeSection = useMemo(
    () => sections.find(s => s.id === activeId),
    [sections, activeId]
  );

  if (!sections.length) {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={{ color: '#fff' }}>Nenhum conteúdo disponível.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.mainScroll}
        contentContainerStyle={{ paddingBottom: 160, paddingTop: 24 }}
      >
        <View style={styles.imgs}>
          <Image
            source={require('../../../assets/mub3-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>{conteudo.tituloPrincipal}</Text>
          {conteudo.subtituloPrincipal && (
            <Text style={styles.heroSubtitle}>{conteudo.subtituloPrincipal}</Text>
          )}
        </View>

        <View style={styles.menuBar}>
          <FlatList
            data={sections}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12 }}
            renderItem={({ item: sec }) => {
              const active = sec.id === activeId;
              const iconColor = active ? '#0D0D0D' : '#5ED0F3';
              return (
                <TouchableOpacity
                  onPress={() => setActiveId(sec.id)}
                  style={[styles.menuBtn, active && styles.menuBtnActive]}
                  activeOpacity={0.85}
                >
                  <View style={styles.menuInner}>
                    {sec.icone && (
                      <Ionicons
                        name={mapIcon(sec.icone)}
                        size={14}
                        color={iconColor}
                        style={{ marginRight: 4 }}
                      />
                    )}
                    <Text style={[styles.menuBtnText, active && styles.menuBtnTextActive]}>
                      {sec.titulo}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {activeSection && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>{activeSection.titulo}</Text>
            {activeSection.descricao && (
              <Text style={styles.sectionDesc}>{activeSection.descricao}</Text>
            )}
            <SectionRenderer section={activeSection} />
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Ionicons name="arrow-back" size={22} color="#0D0D0D" />
        </TouchableOpacity>
        <Text style={styles.bottomTitle}>Saiba Mais</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconBtn}>
          <Ionicons name="home" size={20} color="#0D0D0D" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Corrige mapeamento para ícones válidos do Ionicons
function mapIcon(name) {
  const fallback = {
    museum: 'business',
    sparkles: 'star',
    construct: 'construct', // antes estava 'build'
    people: 'people',
    flag: 'flag',
    call: 'call',
    'information-circle': 'information-circle',
    'help-circle': 'help-circle'
  };
  return fallback[name] || name;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#231F20' },
  mainScroll: { flex: 1 },
  imgs: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 8
  },
  logo: { width: 220, height: 100 },
  hero: { paddingHorizontal: 20, paddingVertical: 12 },
  heroTitle: { color: '#5ED0F3', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  heroSubtitle: { color: '#CCCCCC', marginTop: 6, fontSize: 13, textAlign: 'center' },
  menuBar: { marginTop: 4, maxHeight: 72 },
  menuBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 22,
    backgroundColor: '#2D2D2D',
    marginRight: 8
  },
  menuBtnActive: { backgroundColor: '#5ED0F3' },
  menuInner: { flexDirection: 'row', alignItems: 'center' },
  menuBtnText: { color: '#FFFFFF', fontSize: 13, fontWeight: '500' },
  menuBtnTextActive: { color: '#0D0D0D', fontWeight: '700' },
  sectionCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#333',
    marginTop: 20,
    marginHorizontal: 16
  },
  sectionTitle: { color: '#5ED0F3', fontSize: 18, fontWeight: '600', marginBottom: 8 },
  sectionDesc: { color: '#B5B5B5', fontSize: 13, marginBottom: 12 },
  paragraph: { color: '#FFFFFF', fontSize: 14, lineHeight: 20, marginBottom: 12 },
  bulletLine: { flexDirection: 'row', marginBottom: 6 },
  bulletDot: { width: 6, height: 6, backgroundColor: '#5ED0F3', borderRadius: 3, marginTop: 7, marginRight: 8 },
  bulletText: { color: '#FFFFFF', fontSize: 14, lineHeight: 20, flex: 1 },
  groupSubtitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600', marginBottom: 6 },
  faqBox: {
    marginBottom: 12, backgroundColor: '#1E1E1E', padding: 12,
    borderRadius: 10, borderWidth: 1, borderColor: '#2A2A2A'
  },
  faqQuestion: { color: '#5ED0F3', fontWeight: '600', marginBottom: 4 },
  faqAnswer: { color: '#FFFFFF', lineHeight: 19, fontSize: 14 },
  contactLine: { color: '#FFFFFF', fontSize: 14 },
  linkLine: { color: '#5ED0F3', fontSize: 14, textDecorationLine: 'underline' },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0, right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#231F20',
    borderTopWidth: 1,
    borderTopColor: '#333'
  },
  iconBtn: {
    backgroundColor: '#5ED0F3',
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' }
});

export default SaibaMais;