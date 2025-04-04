import React from "react";
import { View, Text } from "react-native";
import Header from "./components/nav/Header.jsx";
import Summary from "./components/card/Summary.jsx";
import styles from "./components/style";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Summary />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh lorem ipsum dolor
      </Text>
    </View>
  );
}
